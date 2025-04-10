using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EmployeePOC.Client
{
    public class EmployeePOCWebApi
    {
        public string empName;

        [Key]
        public int EmpId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public required string EmpName { get; set; } = "";

        [Column(TypeName = "nvarchar(10)")]
        public required string EmpContact { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public required string EmpEmail { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public required string EmpAddress { get; set; } = "";


    }
}
