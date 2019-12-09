using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MobilizerApp.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Mobilizers",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mobilizers", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Mobilizees",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    MobilizerID = table.Column<Guid>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Pronouns = table.Column<string>(nullable: true),
                    IsSketchy = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mobilizees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Mobilizees_Mobilizers_MobilizerID",
                        column: x => x.MobilizerID,
                        principalTable: "Mobilizers",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Mobilizees_MobilizerID",
                table: "Mobilizees",
                column: "MobilizerID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mobilizees");

            migrationBuilder.DropTable(
                name: "Mobilizers");
        }
    }
}
