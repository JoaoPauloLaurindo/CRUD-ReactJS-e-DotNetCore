using Business.Interfaces;
using Business.Models;
using Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class PerfilRepository : Repository<Perfil>, IPerfilRepository
    {
        public PerfilRepository(SqlDbContext dbContext) : base(dbContext) { }

        public async Task<Perfil> ObterPerfilFuncionalidades(Guid id)
        {
            var perfil = await Db.Perfis.AsNoTracking()
                .Include(x => x.Funcionalidades)
                .FirstOrDefaultAsync(x => x.Id == id);

            return perfil;
        }

        public async Task<IEnumerable<Perfil>> ObterPerfisFuncionalidades()
        {
            var perfis = await Db.Perfis.AsNoTracking()
                .Include(x => x.Funcionalidades)
                .ToListAsync();

            return perfis;
        }
    }
}
