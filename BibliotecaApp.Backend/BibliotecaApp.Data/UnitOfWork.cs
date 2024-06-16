using BibliotecaApp.Data.Interfaces;
using BibliotecaApp.Data.Repositories;

namespace BibliotecaApp.Data;

public class UnitOfWork : IUnitOfWork
{
    private readonly BibliotecaAppDbContext _context;
    private ILibroRepo _libroRepo;
    private IPrestamoRepo _prestamoRepo;

    public UnitOfWork(BibliotecaAppDbContext context)
    {
        _context = context;
        _context.Database.EnsureCreated();
    }

    public ILibroRepo LibroRepo
    {
        get
        {
            if (_libroRepo == null)
                _libroRepo = new LibroRepo(_context);
            return _libroRepo;
        }
    }

    public IPrestamoRepo PrestamoRepo
    {
        get
        {
            if (_prestamoRepo == null)
                _prestamoRepo = new PrestamoRepo(_context);
            return _prestamoRepo;
        }
    }

    public async Task SaveAsync()
        => await _context.SaveChangesAsync();
}