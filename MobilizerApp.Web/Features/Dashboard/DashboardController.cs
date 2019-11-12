using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace MobilizerApp.Web.Features.Dashboard {

    public class DashboardController : Controller {

        public IActionResult Index() {
            
            
            return View("~/Features/Dashboard/Index");
        }

    }

}