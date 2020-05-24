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
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(SqlDbContext dbContext) : base(dbContext) { }

        public async Task<Usuario> ObterUsuarioPerfilPorId(Guid id)
        {
            var user = await Db.Usuarios.AsNoTracking()
                .Include(x => x.Perfil)
                .FirstOrDefaultAsync(x => x.Id == id);

            return user;
        }

        public async Task<IEnumerable<Usuario>> ObterUsuariosPerfil()
        {
            var users = await Db.Usuarios.AsNoTracking()
                .Include(x => x.Perfil)
                .ToListAsync();

            return users;
        }
    }
}
