using Business.Interfaces;
using Data.Context;
using Data.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependecies(this IServiceCollection service)
        {
            service.AddScoped<SqlDbContext>();
            service.AddScoped<IUsuarioRepository, UsuarioRepository>();
            service.AddScoped<IPerfilRepository, PerfilRepository>();
            service.AddScoped<IFuncionalidadeRepository, FuncionalidadeRepository>();

            return service;
        }
    }
}
