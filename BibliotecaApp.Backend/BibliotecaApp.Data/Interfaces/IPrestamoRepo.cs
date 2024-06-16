using BibliotecaApp.Data.Models;

namespace BibliotecaApp.Data.Interfaces;

public interface IPrestamoRepo : IGenericRepo<Prestamo>
{
    Task<Prestamo> GetWithBook(int id);
    Task<IEnumerable<Prestamo>> GetAllWithBooks();
}