using System.Collections.Generic;

namespace Business.Models
{
    public class Perfil : Entity
    {
        public string Nome { get; set; }
        public bool Ativo { get; set; }
        public IEnumerable<Usuario> Usuarios { get; set; }
        public IEnumerable<Funcionalidade> Funcionalidades { get; set; }
    }
}
