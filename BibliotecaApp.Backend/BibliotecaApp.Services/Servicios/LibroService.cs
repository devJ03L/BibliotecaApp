using AutoMapper;
using BibliotecaApp.Data.Interfaces;
using BibliotecaApp.Data.Models;

public class LibroService : ILibroService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public LibroService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<IEnumerable<LibroDTO>> GetAll()
    {
        var libros = await _unitOfWork.LibroRepo.GetAllAsync();
        return _mapper.Map<List<LibroDTO>>(libros);
    }

    public async Task<LibroDTO> Get(int id)
    {
        var libro = await _unitOfWork.LibroRepo.GetByIdAsync(id);
        return _mapper.Map<LibroDTO>(libro);
    }

    public async Task<bool> Exists(string title)
    {
        var exists = await _unitOfWork.LibroRepo.ExistsAsync(l => l.Titulo == title);
        return exists;
    }

    public async Task<bool> Exists(int id)
    {
        var exists = await _unitOfWork.LibroRepo.ExistsAsync(l => l.Id == id);
        return exists;
    }

    public async Task<bool> AnyAvailable(int id)
    {
        var available = await _unitOfWork.LibroRepo.ExistsAsync(l => l.Id == id && l.Disponibles > 0);
        return available;
    }

    public async Task<bool> AllAvailable(int id)
    {
        var allAvailable = await _unitOfWork.LibroRepo.ExistsAsync(l => l.Id == id && l.Disponibles == l.TotalEjemplares);
        return allAvailable;
    }

    public async Task<LibroDTO> Add(LibroCreacionDTO libroCreacionDTO)
    {
        var libro = _mapper.Map<Libro>(libroCreacionDTO);
        libro.Disponibles = libro.TotalEjemplares;

        await _unitOfWork.LibroRepo.AddAsync(libro);
        await _unitOfWork.SaveAsync();

        return _mapper.Map<LibroDTO>(libro);
    }

    public async Task<LibroDTO> Delete(int id)
    {
        var libroBorrar = await _unitOfWork.LibroRepo.GetByIdAsync(id);
        _unitOfWork.LibroRepo.Delete(libroBorrar);
        await _unitOfWork.SaveAsync();

        return _mapper.Map<LibroDTO>(libroBorrar);
    }
}