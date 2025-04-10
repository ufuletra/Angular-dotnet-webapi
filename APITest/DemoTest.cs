using EmployeePOC.Client;
using EmployeePOC.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APITest
{
    public class DemoTest { 

        private EmployeeDetails GetInMemoryDbContext()
        {
            var options = new DbContextOptionsBuilder<EmployeeDetails>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;

            var context = new EmployeeDetails(options);

            context.EmployeePOCWebApi.AddRange(
                new EmployeePOCWebApi { EmpId = 1, EmpName = "saurav", EmpContact = "111", EmpEmail = "saurav@email.com", EmpAddress = "Gandhinagar" },
                new EmployeePOCWebApi { EmpId = 2, EmpName = "Smit", EmpContact = "222", EmpEmail = "Smit@email.com", EmpAddress = "Bharuch" },
                new EmployeePOCWebApi { EmpId = 3, EmpName = "ji", EmpContact = "555", EmpEmail = "kit@email.com", EmpAddress = "surat" }
            );
            context.EmployeePOCWebApi.RemoveRange(context.EmployeePOCWebApi);
            context.SaveChanges();
            return context;
        }


        //[Fact]
        //public async Task GetPOCWebApiEmployee_ReturnsSingleEmployee()
        //{
        //    var context = GetInMemoryDbContext();
        //    var controller = new EmployeePOCWebApisController(context);

        //    var result = await controller.GetEmployeePOCWebApi();

        //    var actionResult = Assert.IsType<ActionResult<IEnumerable<EmployeePOCWebApi>>>(result);
        //    var returnValue = Assert.IsType<List<EmployeePOCWebApi>>(actionResult.Value);
        //    Assert.Equal(3, returnValue.Count);

        //}



        [Fact]
        public async Task GetEmployeePOCWebApi_ReturnsAllEmployees()
        {
            var context = GetInMemoryDbContext();
            var controller = new EmployeePOCWebApisController(context);

            var result = await controller.GetEmployeePOCWebApi();

            var actionResult = Assert.IsType<ActionResult<IEnumerable<EmployeePOCWebApi>>>(result);
            var returnValue = Assert.IsType<List<EmployeePOCWebApi>>(actionResult.Value);
            Assert.Equal(3, returnValue.Count);
            }



        [Fact]
        public async Task GetEmployeePOCWebApi_ById_ReturnsEmployee()
        {
            var context = GetInMemoryDbContext();
            var controller = new EmployeePOCWebApisController(context);

            var result = await controller.GetEmployeePOCWebApi(2);

            var actionResult = Assert.IsType<ActionResult<EmployeePOCWebApi>>(result);
            var employee = Assert.IsType<EmployeePOCWebApi>(actionResult.Value);
            Assert.Equal("Smit", employee.EmpName);
            Assert.Equal(2, employee.EmpId);
        }

        [Fact]
        public async Task PostEmployeePOCWebApi_AddsEmployee()
        {
            var context = GetInMemoryDbContext();
            var controller = new EmployeePOCWebApisController(context);

            var newEmployee = new EmployeePOCWebApi
            {
                EmpId = 4,
                EmpName = "jam",
                EmpContact = "999",
                EmpEmail = "jam@email.com",
                EmpAddress = "Gandhinagar"
            };

            var result = await controller.PostEmployeePOCWebApi(newEmployee);

            var actionResult = Assert.IsType<ActionResult<EmployeePOCWebApi>>(result);
            Assert.Equal(4, context.EmployeePOCWebApi.Count());
        }


        [Fact]
        public async Task PutEmployeePOCWebApi_UpdateEmployee()
        {
            var context = GetInMemoryDbContext();
            var controller = new EmployeePOCWebApisController(context);


            var newEmployee = new EmployeePOCWebApi
            {   
                EmpId = 4,
                EmpName = "test",
                EmpContact = "123",
                EmpEmail = "test@email.com",
                EmpAddress = "rajkot"
            };

            var result = await controller.PutEmployeePOCWebApi(4,newEmployee);

           // Assert.IsType<NoContentResult>(result);

            var updatedEmp = await context.EmployeePOCWebApi.FindAsync(4);

          var actionResult = Assert.IsType<EmployeePOCWebApi>(updatedEmp);
            Assert.Equal("test", updatedEmp.EmpName);
            Assert.Equal("123", updatedEmp.EmpContact);
            Assert.Equal("test@email.com", updatedEmp.EmpEmail);
            Assert.Equal("rajkot", updatedEmp.EmpAddress);
        }


        [Fact]
        public async Task DeleteEmployeePOCWebApi_RemovesEmployee()
        {
            var context = GetInMemoryDbContext();
            var controller = new EmployeePOCWebApisController(context);

            var result = await controller.DeleteEmployeePOCWebApi(1);

            Assert.IsType<NoContentResult>(result);
            Assert.False(context.EmployeePOCWebApi.Any(e => e.EmpId == 4));
        }



    }
}



