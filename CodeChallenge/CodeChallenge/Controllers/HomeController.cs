using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeChallenge.Controllers
{
    public class HomeController : Controller
    {
        //to launch the website with this ASP.NET foundation
        public ActionResult Index()
        {
            //starts up Views/Home/Index.cshtml
            return View();
        }
    }
}
