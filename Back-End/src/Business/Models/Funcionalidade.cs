using System;
using System.Collections.Generic;

namespace Business.Models
{
    public class Funcionalidade : Entity
    {
        public string Nome { get; set; }
        public bool Ativo { get; set; }
        public Perfil Perfil { get; set; }
        public Guid PerfilId { get; set; }
    }
}
