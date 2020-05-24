using Business.Models;
using System;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IFuncionalidadeService
    {
        Task Adicionar(Funcionalidade funcionalidade);
        Task Atualizar(Funcionalidade funcionalidade);
        Task Remover(Guid id);
    }
}
