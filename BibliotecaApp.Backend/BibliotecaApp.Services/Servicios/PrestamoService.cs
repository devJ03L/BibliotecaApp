using AutoMapper;
using BibliotecaApp.Data.Interfaces;
using BibliotecaApp.Data.Models;

public class PrestamoService : IPrestamoService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public PrestamoService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<IEnumerable<PrestamoDTO>> GetAll()
    {
        var prestamos = await _unitOfWork.PrestamoRepo.GetAllWithBooks();
        return _mapper.Map<List<PrestamoDTO>>(prestamos);
    }

    public async Task<PrestamoDTO> Get(int id)
    {
        var prestamo = await _unitOfWork.PrestamoRepo.GetWithBook(id);
        return _mapper.Map<PrestamoDTO>(prestamo);
    }

    public async Task<PrestamoDTO> Add(PrestamoCreacionDTO prestamoCreacionDTO)
    {
        var prestamo = _mapper.Map<Prestamo>(prestamoCreacionDTO);
        prestamo.FechaPrestamo = DateTime.Today;
        prestamo.FechaDevolucion = DateTime.Today.AddDays(7).DayOfWeek == DayOfWeek.Sunday ? DateTime.Today.AddDays(8) : DateTime.Today.AddDays(7);
        prestamo.Estado = true;

        var libro = await _unitOfWork.LibroRepo.GetByIdAsync(prestamoCreacionDTO.LibroId);
        libro.Disponibles--;

        _unitOfWork.LibroRepo.Update(libro);
        await _unitOfWork.PrestamoRepo.AddAsync(prestamo);
        await _unitOfWork.SaveAsync();

        var prestamoLibro = await _unitOfWork.PrestamoRepo.GetWithBook(prestamo.Id);
        return _mapper.Map<PrestamoDTO>(prestamoLibro);
    }

    public async Task<PrestamoDTO> GiveBack(int id)
    {
        var prestamo = await _unitOfWork.PrestamoRepo.GetByIdAsync(id);
        prestamo.FechaDevolucionReal = DateTime.Today.Date;
        prestamo.Estado = false;

        var libro = await _unitOfWork.LibroRepo.GetByIdAsync(prestamo.LibroId);
        libro.Disponibles++;

        _unitOfWork.PrestamoRepo.Update(prestamo);
        _unitOfWork.LibroRepo.Update(libro);
        await _unitOfWork.SaveAsync();

        var prestamoLibro = await _unitOfWork.PrestamoRepo.GetWithBook(prestamo.Id);
        return _mapper.Map<PrestamoDTO>(prestamoLibro);
    }
}