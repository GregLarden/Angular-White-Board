﻿using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace WhiteBoard {
    public class WebApiApplication : System.Web.HttpApplication {
        protected void Application_Start() {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            
            
        }
    }
}
