using System.Linq.Expressions;
using BibliotecaApp.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BibliotecaApp.Data.Repositories;

public abstract class GenericRepo<T> : IGenericRepo<T> where T : class
{
    private readonly BibliotecaAppDbContext _context;
    protected readonly DbSet<T> _dbSet;

    public GenericRepo(BibliotecaAppDbContext context)
    {
        _context = context;
        _dbSet = _context.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync()
        => await _dbSet.ToListAsync();

    public async Task<T> GetByIdAsync(object id)
        => await _dbSet.FindAsync(id);

    public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
        => await _dbSet.Where(predicate).ToListAsync();

    public async Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate)
        => await _dbSet.AnyAsync(predicate);

    public async Task AddAsync(T entity)
        => await _dbSet.AddAsync(entity);

    public void Update(T entity)
        => _dbSet.Update(entity);

    public void Delete(T entity)
        => _dbSet.Remove(entity);

}