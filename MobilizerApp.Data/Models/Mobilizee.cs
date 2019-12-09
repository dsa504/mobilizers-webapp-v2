using System;
using System.Collections.Generic;

namespace MobilizerApp.Data.Models {
    public class Respondent {
        public Guid Id {get;set;}
        public virtual Mobilizer Mobilizer {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Email {get;set;}
        public string Pronouns {get;set;}
        public bool IsSketchy{get;set;}
    }
}