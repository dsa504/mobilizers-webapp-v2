using Microsoft.AspNetCore.Mvc;

namespace MobilizerApp.Web.Features.AssignMobilizees {

    public class AssignMobilizeesController : Controller {

        public IActionResult Index() {

            return View("~/Features/AssignMobilizees/Index");
        }

    }

}