using System;
using System.Text;

namespace Business.Models
{
    public class Usuario : Entity
    {
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string Sexo { get; set; }
        public bool Ativo { get; set; }
        public string Endereco { get; set; }
        public string Cep { get; set; }
        public Perfil Perfil { get; set; }
        public Guid PerfilId { get; set; }
    }
}
