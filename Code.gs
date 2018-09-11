var appSettings = getAppSettings();
var ss = SpreadsheetApp.openById(appSettings.spreadsheetId);
var ws = ss.getSheets()[0];
var userProperties = PropertiesService.getUserProperties();

//
// Map of fields to spreadsheet columns
// 

var columnMap = {
  mobilizer:            { id: 0, type: String },
  name:                 { id: 1, type: String },
  phone:                { id: 2, type: String },
  email:                { id: 3, type: String },
  assignedDate:         { id: 4, type: String },
  assignedStatus:       { id: 5, type: String },
  pronoun:              { id: 6, type: String },
  initialTextSent:      { id: 7, type: Boolean },
  initialTextResponse:  { id: 8, type: String },
  callMade:             { id: 9, type: String },
  occupation:           { id: 10, type: String },
  skills:               { id: 11, type: String },
  interests:            { id: 12, type: Array },
  meetupScheduled:      { id: 13, type: String },
  followupTextSent:     { id: 14, type: Boolean },
  attendedMeetup:       { id: 15, type: Boolean },
  metMobilizerAtEvent:  { id: 16, type: Boolean },
  addToSlack:           { id: 17, type: Boolean },
  meetupEvent:          { id: 18, type: String },
  sketch:               { id: 19, type: Boolean },
};

var internals = {
  checkLogin: function() {
    if (userProperties.getProperty("clientPassword") !== appSettings.password) throw "Not Logged In.";
  },
  getSpreadsheetRows: function (includeHeaderRow){
    var rows = ws
      .getDataRange()
      .getDisplayValues();
      
    if (includeHeaderRow === true) return rows;

    return rows.slice(1, rows.length);
  },
  updateSpreadsheet: function(row, data){
    ws
      .getRange(row+1, 1, 1, data.length)
      .setValues([data]);
    
    return "DONE";
  },
  fromSheet: function(val, type) {
    switch (type) {
      case Boolean: return val.toLowerCase() === "true";
      case Array: return (val && val.trim()) ? JSON.parse(val) : [];
      case String: return val;
      default: return val;
    }
  },
  toSheet: function(val, type) {
    switch (type) {
      case Boolean: return val.toString().toUpperCase();
      case Array: return JSON.stringify(val);
      case String: return val;
      default: return val;
    }
  },
  // just creates an array of numbers of the specified length:
  getNumberRange(rangeLength) {
    var out = [],
    for (var i = 0; i< rangeLength; i++) {
      out.push(i);
    }
    return out;
  }
};

function login(pw) {
  if (pw !== appSettings.password) return "NOPE";
 
  userProperties.setProperty("clientPassword", pw);
  return "OK";
}

function getProgramMembers() {
  internals.checkLogin();

  var rows = internals.getSpreadsheetRows();
  
  return rows.map(function(r, i) {
    return Object.keys(columnMap).reduce(function(m, k){
      m[k] = internals.fromSheet(r[columnMap[k].id], columnMap[k].type);

      return m;
    }, {id: i});
  });
}

function updateProgramMember(member) {
  var columnMapKeys = Object.keys(columnMap);

  var memberRow = internals
    .getNumberRange(columnMapKeys.length)
    .map(function(n) {
      // find the name of the property that goes at this index:
      var propName = columnMapKeys.find(function(k){return columnMap[k].id === n})

      return internals.toSheet(member[propName], columnMap[propName].type);
    });

  internals.updateSpreadsheet(member.id, memberRow);
};

// app entry point
function doGet() {
  var page = HtmlService.createTemplateFromFile('Index');
 
  return page.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=500px');;
}