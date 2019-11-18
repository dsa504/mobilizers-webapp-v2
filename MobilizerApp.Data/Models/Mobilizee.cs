using System;
using System.Collections.Generic;

namespace MobilizerApp.Data.Models {
    public class Mobilizee {
        public Guid Id {get;set;}
        public virtual Mobilizer Mobilizer {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Email {get;set;}
        public string Pronouns {get;set;}
        public DateTime AssignedDate {get;set;}
        public bool Done {get;set;}
        public bool InitialTextSent {get;set;}
        public string InitialTextResponse {get;set;}
        public bool CallMade {get;set;}
        public string CallResponse {get;set;}
        public string Occupation {get;set;}
        public string Skills {get;set;}
        public List<string> Interests {get;set;}
        public bool MeetupScheduled {get;set;}
        public bool FollowupTextSent {get;set;}
        public bool MetMobilizerAtEvent {get;set;}
        public bool AddToInternalChat {get;set;}
        public string MeetupEvent {get;set;}
        public bool IsSketchy{get;set;}
    }
}