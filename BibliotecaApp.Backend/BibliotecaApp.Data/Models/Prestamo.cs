using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BibliotecaApp.Data.Models;

public class Prestamo
{
    [Key]
    public int Id { get; set; }

    [ForeignKey("Libro")]
    public int LibroId { get; set; }
    public Libro Libro { get; set; }

    public DateTime FechaPrestamo { get; set; }
    public DateTime FechaDevolucion { get; set; }
    public DateTime? FechaDevolucionReal { get; set; }
    public bool Estado { get; set; }

}