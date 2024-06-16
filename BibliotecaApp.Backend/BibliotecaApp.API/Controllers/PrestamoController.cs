using Microsoft.AspNetCore.Mvc;

namespace BibliotecaApp.API.Controllers;

[ApiController]
[Route("[controller]")]
public class PrestamoController : ControllerBase
{
    private readonly IPrestamoService _prestamoService;
    private readonly ILibroService _libroService;

    public PrestamoController(IPrestamoService prestamoService, ILibroService libroService)
    {
        _prestamoService = prestamoService;
        _libroService = libroService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<PrestamoDTO>>> Get()
    {
        var prestamos = (await _prestamoService.GetAll()).Where(p => p.Estado == true);
        return Ok(prestamos);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<PrestamoDTO>> Get(int id)
    {
        var prestamo = await _prestamoService.Get(id);
        if (prestamo == null)
            return NotFound();
        return Ok(prestamo);
    }

    [HttpPost]
    public async Task<ActionResult<PrestamoDTO>> Post(PrestamoCreacionDTO prestamoCreacionDTO)
    {
        var libroDisponible = await _libroService.AnyAvailable(prestamoCreacionDTO.LibroId);
        if (!libroDisponible)
            return BadRequest("El libro no está disponible");

        var prestamo = await _prestamoService.Add(prestamoCreacionDTO);
        return Ok(prestamo);
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<PrestamoDTO>> Put(int id)
    {
        var prestamo = await _prestamoService.GiveBack(id);
        return Ok(prestamo);
    }
}