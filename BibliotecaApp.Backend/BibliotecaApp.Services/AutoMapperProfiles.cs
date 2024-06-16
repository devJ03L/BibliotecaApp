using AutoMapper;
using BibliotecaApp.Data.Models;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Libro, LibroDTO>();
        CreateMap<LibroCreacionDTO, Libro>();
        CreateMap<PrestamoCreacionDTO, Prestamo>();
        CreateMap<Prestamo, PrestamoDTO>()
        .ForMember(
            prestamo => prestamo.Libro,
            op => op.MapFrom(MapLibro)
        )
        .ForMember(
            prestamo => prestamo.FechaPrestamo,
            op => op.MapFrom(src => src.FechaPrestamo.ToShortDateString())
        )
        .ForMember(
            prestamo => prestamo.FechaDevolucion,
            op => op.MapFrom(src => src.FechaDevolucion.ToShortDateString())
        )
        .ForMember(
            prestamo => prestamo.FechaDevolucionReal,
            op => op.MapFrom(src => src.FechaDevolucionReal == null ? "" : src.FechaDevolucionReal.Value.ToShortDateString())
        );
    }

    private LibroDTO MapLibro(Prestamo prestamo, PrestamoDTO prestamoDTO)
    {
        var resultado = new LibroDTO();
        if (prestamo.Libro == null)
            return resultado;

        resultado.Id = prestamo.LibroId;
        resultado.Titulo = prestamo.Libro.Titulo;
        resultado.Disponibles = prestamo.Libro.Disponibles;
        resultado.TotalEjemplares = prestamo.Libro.TotalEjemplares;
        return resultado;
    }
}