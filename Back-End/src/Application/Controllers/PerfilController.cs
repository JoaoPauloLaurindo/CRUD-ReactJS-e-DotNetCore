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
    [Route("api/perfil")]
    public class PerfilController : MainController
    {
        private readonly IPerfilRepository _repository;

        public PerfilController(IPerfilRepository repository, IMapper mapper) : base(mapper)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> ObterTodosPerfilFuncionalidades()
        {
            var perfis = _mapper.Map<IEnumerable<PerfilFuncionalidadeViewModel>>(await _repository.ObterPerfisFuncionalidades());
            return Ok(perfis);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> ObterPerfilPorId(Guid id)
        {
            var perfil = _mapper.Map<PerfilFuncionalidadeViewModel>(await _repository.ObterPerfilFuncionalidades(id));
            return Ok(perfil);
        }

        [HttpPost]
        public async Task<IActionResult> CadastrarPerfil([FromBody] PerfilFuncionalidadeViewModel perfilViewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var perfil = _mapper.Map<Perfil>(perfilViewModel);
            await _repository.Adicionar(perfil);
            return Ok("Perfil criado");
        }

        [HttpPut]
        public async Task<IActionResult> AtualizarPerfil([FromBody] PerfilFuncionalidadeViewModel perfilViewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var perfil = _mapper.Map<Perfil>(perfilViewModel);
            await _repository.Atualizar(perfil);
            return Ok("Perfil Atualizado");
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> ExcluirPerfil(Guid id)
        {
            var res = await ObterPerfilPorId(id);
            if (res == null) return NotFound("Perfil não encontrado");

            await _repository.Remover(id);
            return Ok("Perfil removido");
        }
    }
}
