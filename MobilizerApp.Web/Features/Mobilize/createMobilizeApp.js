import Vue from "vue";
import {IntakeFormComponent} from "./IntakeFormComponent.js";

//
// Field options
//
const programsAndCommittees = [
  "Communications",
  "Direct Service/Brake Lights",
  "Healthcare For All",
  "Immigration Working Group",
  "Labor Standing",
  "Municipal Action",
  "Socialist Feminist Caucus",
  "Political Education",
  "Socialists Of Color",
  "Tech",
  "Other",
];

const initialTextResponses = [
  "Call Scheduled",
  "Left Town / Not Interested",
  "No Reply",
];

const meetingScheduledResponses = [
  "Meetup Scheduled",
  "Can't/May Attend Later Events",
  "Not Interested",
  //"Other",
];

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// *********
// Vue
// *********
Vue.use(VueMaterial.default);

const createMobilizeApp = () => {
  const app = new Vue({
    el: '#app',
    components: {
      "intake-form": IntakeFormComponent,
    },
    data: {
      chapterName: "",
      programMembers: [],       
      showLogin: true,
      showSteps: true,
      selectedProgramMemberId: -1,
      presets: {
        initialTextResponses: initialTextResponses,
        programsAndCommittees: programsAndCommittees,
        meetingScheduledResponses: meetingScheduledResponses,
      },
    },
    computed: {
      selectedProgramMember() {
        if (!this.programMembers.length) return null;
  
        var spmId = this.selectedProgramMemberId;
        return this.programMembers.find(function(pm) {
          return pm.id === spmId;
        });
      }
    },
    watch: {},
    methods: {
      getProgramMembers() {
  
      },
      updateProgramMember: debounce(function(update) {
        this.selectedProgramMember[update.changedProp] = update.value;
  
        console.log(this.selectedProgramMember[update.changedProp])
  
      }, 500),
      onProgramMemberSelect(programMemberId) {
        this.selectedProgramMemberId = programMemberId;
      },
      onMobilizerChange() {
        this.selectedProgramMemberId = -1;
      },
    }
  });

  return app;
};

export {createMobilizeApp};