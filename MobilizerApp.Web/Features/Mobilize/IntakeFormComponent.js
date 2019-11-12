import Vue from "vue";

const copyArray = (arr) => arr.reduce((m, el) => {
    m.push(el);

    return m;
}, []);

const absorbObjValues = (targetObj, sourceObj) => {
    const sourceKeys = Object.keys(sourceObj);
    for (let i = 0; i < sourceKeys.length; i++) {
        const k = sourceKeys[i];

        const val = (Array.isArray(sourceObj[k])) 
            ? copyArray(sourceObj[k]) 
            : sourceObj[k];

        Vue.set(targetObj, k, val); 
    }
};

    const parseDate = (dateString = "12/31/1999") => {
      var dateComponents = dateString
        .split("/")
        .map(n => parseInt(n));

      var d = new Date();
      d.setMonth(dateComponents[0] - 1);
      d.setDate(dateComponents[1]);
      d.setFullYear(dateComponents[2]);

      return d;
    }

    const addDays = (date, days) => {
      if (typeof date === 'string') {
        var d = parseDate(date);
        d.setDate(d.getDate() + days);
        return d;
      }
      
      if (date instanceof Date) {
        var d = new Date(date.valueOf());
        d.setDate(d.getDate() + days);
        return d;
      }

      return null;
    }

    const getDateString = (d = new Date()) =>
      `${d.getMonth}/${d.getDate}/${d.getFullYear}`

    const IntakeFormComponent = {
      template: "#intake-form",
      props: {
        presets: { type: Object, required: true },
        // external program member object. don't change this one:
        programMember: { type: Object, required: true }, 
      },
      data() { return {
        // internal program member representation. this is the one we actually use:
        pm: {},
      };},
      methods: {
        emitChange(changedProp, value) {
          this.$emit("program-member-update", {
            id: this.programMember.id,
            changedProp: changedProp,
            value: value
          });
        },
        absorbNewProgramMemberData() {
          // prevent mutating data on this component's parent Vue instance:
          absorbObjValues(this.pm, this.programMember);
        },
      },
      computed: {
        showSteps() {
          return !this.pm.done || !this.pm.sketch;
        },
        dueDate() {
          var d = parseDate(this.pm.assignedDate);
          return getDateString(addDays(d, 14));
        },
      },
      watch: {
        programMember(newVal, oldVal) {
          this.absorbNewProgramMemberData();
        },
      },
      created() {
        this.absorbNewProgramMemberData();
      },
    };


  export {IntakeFormComponent};