public interface ILibroService
{
    Task<IEnumerable<LibroDTO>> GetAll();
    Task<LibroDTO> Get(int id);
    Task<bool> Exists(string title);
    Task<bool> Exists(int id);
    Task<bool> AnyAvailable(int id);
    Task<bool> AllAvailable(int id);
    Task<LibroDTO> Add(LibroCreacionDTO libroCreacionDTO);
    Task<LibroDTO> Delete(int id);
}