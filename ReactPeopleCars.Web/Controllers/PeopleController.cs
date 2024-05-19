using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars.Data;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleRepo(_connectionString);
            return repo.GetAll();
        }

        [HttpPost("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepo(_connectionString);
            repo.AddPerson(person);
        }

        [HttpPost("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleRepo(_connectionString);
            repo.AddCar(car);
        }

        [HttpGet("getpersonbyid")]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleRepo(_connectionString);
            return repo.GetPersonById(id);
        }

        [HttpGet("getcarsbyid")]
        public List<Car> GetCarsById(int id)
        {
            var repo = new PeopleRepo(_connectionString);
            return repo.GetCarsById(id);
            
        }

        [HttpPost("deleteallcars")]
        public void DeleteAllCars(int id)
        {
            var repo = new PeopleRepo(_connectionString);
            repo.DeleteAll(id);
        }

    }
}
