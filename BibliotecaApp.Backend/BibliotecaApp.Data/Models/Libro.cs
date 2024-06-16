using System.ComponentModel.DataAnnotations;

namespace BibliotecaApp.Data.Models;

public class Libro
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Titulo { get; set; }

    public int TotalEjemplares { get; set; }

    public int Disponibles { get; set; }

    public ICollection<Prestamo> Prestamos { get; set; }
}