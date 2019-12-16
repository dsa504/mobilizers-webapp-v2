using System;
using System.IO;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using MobilizerApp.Data.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace MobilizerApp.Data {
    
    public class MobilizerContext : DbContext {

        internal AppSettings AppSettings { get; set; }

        public MobilizerContext() {
            AppSettings = JsonSerializer
                .Deserialize<AppSettings>(File.ReadAllText("appsettings.json"));
        }

        public DbSet<User> Users {get;set;}
        public DbSet<Respondent> Respondents {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseMySql(AppSettings.ConnectionString, mySqlOptions => {
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