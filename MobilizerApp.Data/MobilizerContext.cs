using Microsoft.EntityFrameworkCore;
using MobilizerApp.Data.Models;

namespace MobilizerApp.Data {
    
    public class MobilizerContext : DbContext {

        public DbSet<Mobilizer> Mobilizers {get;set;}
        public DbSet<Mobilizee> Mobilizees {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseMySQL("server=localhost;database=MobilizerApp;user=user;password=password;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Mobilizer>(entity => {
                entity.HasKey(e => e.ID);
            });

            modelBuilder.Entity<Mobilizee>(entity => {
                entity.HasKey(e => e.Id);

                entity.HasOne(e => e.Mobilizer)
                    .WithMany(m => m.Mobilizees);
            });
        }

    }
}