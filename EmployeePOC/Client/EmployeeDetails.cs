using Microsoft.EntityFrameworkCore;

namespace EmployeePOC.Client
{
    public class EmployeeDetails:DbContext
    {
        public EmployeeDetails(DbContextOptions options) : base(options)
        {
        }

        protected EmployeeDetails()
        {
        }

        public DbSet<EmployeePOCWebApi> EmployeePOCWebApi {  get; set; }

    }
}
