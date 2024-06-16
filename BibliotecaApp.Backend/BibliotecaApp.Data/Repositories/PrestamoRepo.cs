using BibliotecaApp.Data.Interfaces;
using BibliotecaApp.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace BibliotecaApp.Data.Repositories;

public class PrestamoRepo : GenericRepo<Prestamo>, IPrestamoRepo
{
    public PrestamoRepo(BibliotecaAppDbContext context) : base(context) { }

    public async Task<IEnumerable<Prestamo>> GetAllWithBooks()
    {
        var prestamos = await _dbSet.Include(l => l.Libro).ToListAsync();
        return prestamos;
    }

    public async Task<Prestamo> GetWithBook(int id)
    {
        var prestamo = await _dbSet
                        .Include(l => l.Libro)
                        .FirstOrDefaultAsync(l => l.Id == id);

        return prestamo;
    }
}