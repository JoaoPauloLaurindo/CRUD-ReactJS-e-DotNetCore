using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Application.ViewModels
{
    public class PerfilFuncionalidadeViewModel
    {
        [Key]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(100, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 3)]
        public string Nome { get; set; }

        public bool Ativo { get; set; }

        public IEnumerable<FuncionalidadeViewModel> Funcionalidades { get; set; }
        public IEnumerable<UsuarioViewModel> Usuarios { get; set; }
    }
}
