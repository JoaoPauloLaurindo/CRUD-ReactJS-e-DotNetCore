using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.ViewModels;
using AutoMapper;
using Business.Interfaces;
using Business.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/usuario")]
    public class UsuarioController : MainController
    {
        private readonly IUsuarioRepository _repository;

        public UsuarioController(IUsuarioRepository repository, IMapper mapper) : base(mapper)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> ObterTodos()
        {
            var usuarios = _mapper.Map<IEnumerable<UsuarioViewModel>>(await _repository.ObterUsuariosPerfil());
            return Ok(usuarios);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> ObterPorId(Guid id)
        {
            var usuario = _mapper.Map<UsuarioViewModel>(await _repository.ObterPorId(id));
            return Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> CadastrarUsuario([FromBody] UsuarioViewModel funcionalidadeViewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var usuario = _mapper.Map<Usuario>(funcionalidadeViewModel);
            await _repository.Adicionar(usuario);
            return Ok("Usuario criado");
        }

        [HttpPut]
        public async Task<IActionResult> AtualizarUsuario([FromBody] UsuarioViewModel funcionalidadeViewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var usuario = _mapper.Map<Usuario>(funcionalidadeViewModel);
            await _repository.Atualizar(usuario);
            return Ok("Usuario atualizado");
        }

        [HttpDelete("deletar/{id:guid}")]
        public async Task<IActionResult> ExcluirUsuario(Guid id)
        {
            var res = await _repository.ObterPorId(id);
            if (res == null) return NotFound("Usuario não encontrado");

            await _repository.Remover(id);
            return Ok("Usuario removido");
        }
    }
}
