using System;
using Microsoft.EntityFrameworkCore;
using MobilizerApp.Data.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace MobilizerApp.Data {
    
    public class MobilizerContext : DbContext {

        public DbSet<Mobilizer> Mobilizers {get;set;}
        public DbSet<Respondent> Mobilizees {get;set;}


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseMySql("server=localhost;database=MobilizerApp;user=mobilizerapp;password=dsaneworleans;", mySqlOptions => {
                mySqlOptions.ServerVersion(new Version(5, 7, 17), ServerType.MySql);
            });
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Mobilizer>(entity => {
                entity.HasKey(e => e.ID);
            });

            modelBuilder.Entity<Respondent>(entity => {
                entity.HasKey(e => e.Id);
            });
        }

    }
}