using Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Mapping
{
    public class FuncionalidadeMapping : IEntityTypeConfiguration<Funcionalidade>
    {
        public void Configure(EntityTypeBuilder<Funcionalidade> builder)
        {
            builder.HasKey(x => x.Id);

            builder.ToTable("TB_FUNCIONALIDADE", "dbo");

            builder.Property(x => x.Nome)
                .IsRequired()
                .HasColumnType("varchar(100)")
                .HasColumnName("Nome");

            builder.HasOne(x => x.Perfil)
                .WithMany(x => x.Funcionalidades);

        }
    }
}
