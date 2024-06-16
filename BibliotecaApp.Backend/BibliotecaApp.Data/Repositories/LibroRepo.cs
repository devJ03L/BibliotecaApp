using BibliotecaApp.Data.Interfaces;
using BibliotecaApp.Data.Models;

namespace BibliotecaApp.Data.Repositories;

public class LibroRepo : GenericRepo<Libro>, ILibroRepo
{
    public LibroRepo(BibliotecaAppDbContext context) : base(context) { }
}