using Microsoft.AspNetCore.Mvc;
using MobilizerApp.Web.Features.Dashboard;

namespace MobilizerApp.Web.Features.Home {

    public class HomeController: Controller {

        public IActionResult Index() => View("~/Features/Home/Index");

        public IActionResult Login() {

            return RedirectToAction(
                nameof(DashboardController.Index),
                nameof(DashboardController)
            );
        } 

    }

}