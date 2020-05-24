using Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Mapping
{
    public class PerfilMapping : IEntityTypeConfiguration<Perfil>
    {
        public void Configure(EntityTypeBuilder<Perfil> builder)
        {
            builder.ToTable("TB_PERFIL", "dbo");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Nome)
                .IsRequired()
                .HasColumnType("varchar(100)")
                .HasColumnName("Nome");

            builder.HasMany(x => x.Usuarios)
                .WithOne(x => x.Perfil)
                .HasForeignKey(x => x.PerfilId);

            builder.HasMany(x => x.Funcionalidades)
                .WithOne(x => x.Perfil)
                .HasForeignKey(x => x.PerfilId);
        }
    }
}
