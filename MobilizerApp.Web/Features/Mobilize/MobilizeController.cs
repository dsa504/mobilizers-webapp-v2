using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace MobilizerApp.Web.Features.Mobilize {
    public class MobilizeController: Controller {

        public IActionResult Index() {

            return View("~/Features/Mobilize/Index");
        }

    } 
}