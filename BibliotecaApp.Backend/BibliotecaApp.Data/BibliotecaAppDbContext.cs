using Microsoft.EntityFrameworkCore;
using BibliotecaApp.Data.Models;

namespace BibliotecaApp.Data;

public class BibliotecaAppDbContext : DbContext
{
    public BibliotecaAppDbContext(DbContextOptions options) : base(options) { }

    public DbSet<Libro> Libros { get; set; }
    public DbSet<Prestamo> Prestamos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        List<Libro> librosIniciales = new List<Libro>()
        {
            new Libro(){ Id = 1,  TotalEjemplares = 10, Disponibles=10, Titulo = "El señor de los anillos: La comunidad del anillo" },
            new Libro(){ Id = 2,  TotalEjemplares = 10, Disponibles=10, Titulo = "El hobbit" },
            new Libro(){ Id = 3,  TotalEjemplares = 10, Disponibles=10, Titulo = "Harry Potter y la piedra filosofal" },
            new Libro(){ Id = 4,  TotalEjemplares = 10, Disponibles=10, Titulo = "Juego de tronos" },
            new Libro(){ Id = 5,  TotalEjemplares = 10, Disponibles=10, Titulo = "El nombre del viento" }
        };

        modelBuilder.Entity<Libro>(libro => libro.HasData(librosIniciales));
    }
}