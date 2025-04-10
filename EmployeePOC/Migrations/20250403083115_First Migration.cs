using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeePOC.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeePOCWebApi",
                columns: table => new
                {
                    EmpId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    EmpContact = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    EmpEmail = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    EmpAddress = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeePOCWebApi", x => x.EmpId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeePOCWebApi");
        }
    }
}
