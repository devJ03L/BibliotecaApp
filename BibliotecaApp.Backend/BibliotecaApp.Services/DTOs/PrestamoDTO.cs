using BibliotecaApp.Data.Models;

public class PrestamoDTO
{
    public int Id { get; set; }

    public int LibroId { get; set; }
    public LibroDTO Libro { get; set; }

    public string FechaPrestamo { get; set; }
    public string FechaDevolucion { get; set; }
    public string FechaDevolucionReal { get; set; }
    public bool Estado { get; set; }
}