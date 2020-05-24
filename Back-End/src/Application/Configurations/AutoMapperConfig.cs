using Application.ViewModels;
using AutoMapper;
using Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Configurations
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<Usuario, UsuarioViewModel>().ReverseMap();
            CreateMap<Perfil, PerfilViewModel>().ReverseMap();
            CreateMap<Funcionalidade, FuncionalidadeViewModel>().ReverseMap();
            CreateMap<Perfil, PerfilFuncionalidadeViewModel>().ReverseMap();
        }
    }
}
