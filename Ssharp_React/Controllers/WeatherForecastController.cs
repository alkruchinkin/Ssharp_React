using Microsoft.AspNetCore.Mvc;

namespace Ssharp_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

       // private readonly ILogger<WeatherForecastController> _logger;

        //public WeatherForecastController(ILogger<WeatherForecastController> logger)
        //{
          //  _logger = logger;
        //}
        //запрос на сайт 
        /*
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            //Создаем новый обьект и вносим изменения 
            return Enumerable.Range(1, 10).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary2 = Summaries[Random.Shared.Next(Summaries.Length)]
                //Summary = Summaries[Random.Shared.Next(Summaries.Length)]

            })
            .ToArray();
        }*/
    }

}