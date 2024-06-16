using BibliotecaApp.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace BibliotecaApp.Data;

public static class DataDI
{
    public static IServiceCollection DataLayerDI(this IServiceCollection services)
    {
        services.AddDbContext<BibliotecaAppDbContext>(op => op.UseInMemoryDatabase("BibliotecaDB"));
        services.AddTransient<IUnitOfWork, UnitOfWork>();
        return services;
    }
}