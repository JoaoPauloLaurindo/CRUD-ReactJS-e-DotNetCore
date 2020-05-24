using Business.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Data.Context
{
    public class SqlDbContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Perfil> Perfis { get; set; }
        public DbSet<Funcionalidade> Funcionalidades { get; set; }

        public SqlDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            foreach(var property in builder.Model.GetEntityTypes()
                .SelectMany(x => x.GetProperties().Where(x => x.ClrType == typeof(string))))
            {
                property.SetColumnType("varchar(50)");
            }

            builder.ApplyConfigurationsFromAssembly(typeof(SqlDbContext).Assembly);

            foreach (var relationship in builder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;
            }

            base.OnModelCreating(builder);
        }
    }
}
