using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ViewModels;
using AutoMapper;
using Business.Interfaces;
using Business.Models;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/funcionalidade")]
    public class FuncionalidadeController : MainController
    {
        private readonly IFuncionalidadeRepository _repository;

        public FuncionalidadeController(IFuncionalidadeRepository repository, IMapper mapper) : base(mapper)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> ObterTodas()
        {
            var funcionalidades = _mapper.Map<IEnumerable<FuncionalidadeViewModel>>(await _repository.ObterTodos());

            return Ok(funcionalidades);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> ObterPorId(Guid id)
        {
            var funcionalidade = _mapper.Map<FuncionalidadeViewModel>(await _repository.ObterPorId(id));
            return Ok(funcionalidade);
        }

        [HttpPost]
        public async Task<IActionResult> CadastrarPerfil([FromBody] FuncionalidadeViewModel funcionalidadeViewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var funcionalidade = _mapper.Map<Funcionalidade>(funcionalidadeViewModel);
            await _repository.Adicionar(funcionalidade);
            return Ok("Funcionalidade criada");
        }

        [HttpPut]
        public async Task<IActionResult> AtualizarFuncionalidade([FromBody] FuncionalidadeViewModel funcionalidadeViewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var funcionalidade = _mapper.Map<Funcionalidade>(funcionalidadeViewModel);
            await _repository.Atualizar(funcionalidade);
            return Ok("Funcionalidade atualizada");
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> ExcluirFuncionalidade(Guid id)
        {
            var res = await ObterPorId(id);
            if (res == null) return NotFound();

            await _repository.Remover(id);

            return Ok("Funcionalidade excluida");
        }
    }
}
