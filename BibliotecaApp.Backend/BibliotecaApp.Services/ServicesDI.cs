using Microsoft.Extensions.DependencyInjection;
using BibliotecaApp.Data;

namespace BibliotecaApp.Services;

public static class ServicesDI
{
    public static IServiceCollection ServicesLayerDI(this IServiceCollection services)
    {
        services.DataLayerDI();
        services.AddTransient<ILibroService, LibroService>();
        services.AddTransient<IPrestamoService, PrestamoService>();
        services.AddAutoMapper(typeof(AutoMapperProfiles));
        return services;
    }
}
