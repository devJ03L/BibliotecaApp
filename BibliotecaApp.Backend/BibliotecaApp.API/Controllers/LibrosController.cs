using Microsoft.AspNetCore.Mvc;

namespace BibliotecaApp.API.Controllers;

[ApiController]
[Route("[controller]")]
public class LibroController : ControllerBase
{
    private readonly ILibroService _libroService;

    public LibroController(ILibroService libroService)
    {
        _libroService = libroService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<LibroDTO>>> Get()
    {
        var libros = await _libroService.GetAll();
        return Ok(libros);
    }

    [HttpGet("{id:int}", Name = "GetBookById")]
    public async Task<ActionResult<LibroDTO>> Get(int id)
    {
        var libro = await _libroService.Get(id);
        if (libro == null)
            return NotFound();
        return Ok(libro);
    }

    [HttpPost]
    public async Task<ActionResult> Post(LibroCreacionDTO libroCreacionDTO)
    {
        var exists = await _libroService.Exists(libroCreacionDTO.Titulo);
        if (exists)
            return BadRequest("El libro ya existe");

        var libroCreado = await _libroService.Add(libroCreacionDTO);
        return Ok(libroCreado);
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id)
    {
        var exists = await _libroService.Exists(id);
        if (!exists)
            return NotFound("El libro no existe");

        var allAvailable = await _libroService.AllAvailable(id);
        if (!allAvailable)
            return BadRequest("No es posible elimarlos, existen ejemplares en prestamo");

        var libroBorrado = await _libroService.Delete(id);
        return Ok(libroBorrado);
    }
}
