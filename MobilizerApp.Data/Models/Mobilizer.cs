using System;
using System.Collections.Generic;

namespace MobilizerApp.Data.Models {

    public class Mobilizer {

        public Guid ID {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Email {get;set;}
        public virtual ICollection<Mobilizee> Mobilizees {get;set;}         

    }

}