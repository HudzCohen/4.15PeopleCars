using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleCars.Data
{
    public class PeopleRepo
    {
        private readonly string _connectionString;
        public PeopleRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAll()
        {
            using var ctx = new PeopleDataContext(_connectionString);
            return ctx.People.Include(p => p.Cars).ToList();
        }

        public void AddPerson(Person person)
        {
            using var ctx = new PeopleDataContext(_connectionString);
            ctx.People.Add(person);
            ctx.SaveChanges();
        }

        public void AddCar(Car car)
        {
            using var ctx = new PeopleDataContext(_connectionString);
            ctx.Cars.Add(car);
            ctx.SaveChanges();
        }

        public Person GetPersonById(int id)
        {
            using var ctx = new PeopleDataContext(_connectionString);
            return ctx.People.FirstOrDefault(p => p.Id == id);

        }

        public List<Car> GetCarsById(int id)
        {
            using var ctx = new PeopleDataContext(_connectionString);
            return ctx.Cars.Where(c => c.PersonId == id).ToList();
        }

        public void DeleteAll(int id)
        {
            using var ctx = new PeopleDataContext(_connectionString);
            ctx.Cars.RemoveRange(ctx.Cars.Where(c => c.PersonId == id));
            ctx.SaveChanges();
        }

    }
}
