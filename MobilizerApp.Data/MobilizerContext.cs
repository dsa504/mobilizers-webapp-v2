using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using MobilizerApp.Data.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace MobilizerApp.Data {
    
    public class MobilizerContext : DbContext {

        protected string ConnectionString { get; set; }

        public MobilizerContext() {
            File.ReadAllText("appsettings.json");
        }

        public MobilizerContext(string connectionString) => 
            ConnectionString = connectionString;

        public DbSet<User> Users {get;set;}
        public DbSet<Respondent> Respondents {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseMySql(ConnectionString, mySqlOptions => {
                mySqlOptions.ServerVersion(new Version(5, 7, 17), ServerType.MySql);
            });
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity => {
                entity.HasKey(e => e.ID);
            });

            modelBuilder.Entity<Respondent>(entity => {
                entity.HasKey(e => e.ID);
            });
        }

    }
}