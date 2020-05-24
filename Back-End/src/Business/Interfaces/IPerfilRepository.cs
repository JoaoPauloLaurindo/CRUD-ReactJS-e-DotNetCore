using Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IPerfilRepository : IRepository<Perfil>
    {
        Task<IEnumerable<Perfil>> ObterPerfisFuncionalidades();
        Task<Perfil> ObterPerfilFuncionalidades(Guid id);
    }
}
