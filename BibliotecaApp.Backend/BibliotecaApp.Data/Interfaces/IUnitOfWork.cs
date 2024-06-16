namespace BibliotecaApp.Data.Interfaces;

public interface IUnitOfWork
{
    ILibroRepo LibroRepo { get; }
    IPrestamoRepo PrestamoRepo { get; }
    Task SaveAsync();
}