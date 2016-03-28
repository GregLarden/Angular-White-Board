using System.Web.Http;

namespace WhiteBoard {
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
           
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{Start}/{End}",
                defaults: new { Start = RouteParameter.Optional, End = RouteParameter.Optional }
            );
        }
    }
}
