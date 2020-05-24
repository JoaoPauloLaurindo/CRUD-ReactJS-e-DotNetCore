using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Controllers
{
    [ApiController]
    public abstract class MainController : ControllerBase
    {
        public readonly IMapper _mapper;

        public MainController(IMapper mapper)
        {
            _mapper = mapper;
        }
    }
}
