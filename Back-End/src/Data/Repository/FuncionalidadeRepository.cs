using Business.Interfaces;
using Business.Models;
using Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Repository
{
    public class FuncionalidadeRepository : Repository<Funcionalidade>, IFuncionalidadeRepository
    {
        public FuncionalidadeRepository(SqlDbContext context) : base(context) { }
    }
}
