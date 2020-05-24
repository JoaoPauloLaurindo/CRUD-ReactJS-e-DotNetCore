using Business.Models;
using System;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IPerfilService
    {
        Task Adicionar(Perfil perfil);
        Task Atualizar(Perfil perfil);
        Task Remover(Guid id);
    }
}
