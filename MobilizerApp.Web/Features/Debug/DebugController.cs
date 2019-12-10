
using Microsoft.AspNetCore.Mvc;
using MobilizerApp.Data;

namespace MobilizerApp.Web.Features.Debug {

    public class DebugController : Controller {

        protected MobilizerContext MobilizerContext { get; set; }

        public DebugController(MobilizerContext context) {
            MobilizerContext = context;
        }

        public IActionResult Index => View();

        public IActionResult SeedDevelopmentData
            => Json(new { Success = true });

    } 

}