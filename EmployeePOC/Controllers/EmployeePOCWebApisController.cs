using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeePOC.Client;

namespace EmployeePOC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeePOCWebApisController : ControllerBase
    {
        private readonly EmployeeDetails _context;

        public EmployeePOCWebApisController(EmployeeDetails context)
        {
            _context = context;
        }

        // GET: api/EmployeePOCWebApis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeePOCWebApi>>> GetEmployeePOCWebApi()
        {
            return await _context.EmployeePOCWebApi.ToListAsync();
        }

        // GET: api/EmployeePOCWebApis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeePOCWebApi>> GetEmployeePOCWebApi(int id)
        {
            var employeePOCWebApi = await _context.EmployeePOCWebApi.FindAsync(id);

            if (employeePOCWebApi == null)
            {
                return NotFound();
            }

            return employeePOCWebApi;
        }

        // PUT: api/EmployeePOCWebApis/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeePOCWebApi(int id, EmployeePOCWebApi employeePOCWebApi)
        {
            Console.WriteLine(employeePOCWebApi.EmpName);

           
            if (id != employeePOCWebApi.EmpId 
                || employeePOCWebApi.EmpName == ""
                || employeePOCWebApi.EmpContact == ""
                || employeePOCWebApi.EmpEmail == ""
                || employeePOCWebApi.EmpAddress == "")
            {
                return BadRequest();
            }

            _context.Entry(employeePOCWebApi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeePOCWebApiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeePOCWebApis
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeePOCWebApi>> PostEmployeePOCWebApi(EmployeePOCWebApi employeePOCWebApi)
        {
            if (employeePOCWebApi.EmpName == ""
                || employeePOCWebApi.EmpContact == ""
                || employeePOCWebApi.EmpEmail == ""
                || employeePOCWebApi.EmpAddress == "")
            {
                return BadRequest();
            }

            _context.EmployeePOCWebApi.Add(employeePOCWebApi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeePOCWebApi", new { id = employeePOCWebApi.EmpId }, employeePOCWebApi);
        }

        // DELETE: api/EmployeePOCWebApis/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeePOCWebApi(int id)
        {
            var employeePOCWebApi = await _context.EmployeePOCWebApi.FindAsync(id);
            if (employeePOCWebApi == null)
            {
                return NotFound();
            }

            _context.EmployeePOCWebApi.Remove(employeePOCWebApi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeePOCWebApiExists(int id)
        {
            return _context.EmployeePOCWebApi.Any(e => e.EmpId == id);
        }
    }
}
