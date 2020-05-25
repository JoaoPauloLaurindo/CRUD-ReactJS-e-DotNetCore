using Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Mapping
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.ToTable("TB_USUARIO", "dbo");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Nome)
                .IsRequired()
                .HasColumnType("varchar(100)")
                .HasColumnName("Nome");

            builder.Property(x => x.Cpf)
                .IsRequired()
                .HasColumnType("varchar(11)")
                .HasColumnName("Cpf");

            builder.Property(x => x.Telefone)
                .IsRequired()
                .HasColumnType("varchar(11)")
                .HasColumnName("Telefone");

            builder.Property(x => x.Endereco)
                .IsRequired()
                .HasColumnType("varchar(100")
                .HasColumnName("Endereco");

            builder.Property(x => x.Cep)
                .IsRequired()
                .HasColumnType("varchar(8)")
                .HasColumnName("Cep");

            builder.Property(x => x.Sexo)
                .IsRequired()
                .HasColumnType("varchar(20)")
                .HasColumnName("Sexo");

            builder.HasOne(x => x.Perfil)
                .WithMany(x => x.Usuarios);
        }
    }
}
