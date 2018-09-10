var ss = SpreadsheetApp.openById(appSettings.spreadsheetId);
var ws = ss.getSheets()[0];

//
// Map of fields to spreadsheet columns
// don't really use the 'type' atm ::shrug::
// 
var columnMap = {
  mobName:              { id: 0, type: String },
  pmName:               { id: 1, type: String },
  pmPhone:              { id: 2, type: String },
  pmEmail:              { id: 3, type: String },
  pmAssignedDate:       { id: 4, type: String },
  pmAssignedStatus:     { id: 5, type: String },
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
  metPm:                { id: 16, type: Boolean },
  addToSlack:           { id: 17, type: Boolean },
  meetupEvent:          { id: 18, type: String },
  sketch:               { id: 19, type: Boolean },
};

var clientPw;

var internals = {
  checkLogin: function() {
    if (clientPw !== appSettings.password) throw "Not Logged In.";
  },
};


function login(pw) {
  if (pw !== appSettings.password) return "NOPE";
 
  clientPw = pw;
  return "OK";
}

function getProgramMembersByMobilizerId(mobilizerId) {
  internals.checkLogin();
};

function getSpreadsheet(){
  internals.checkLogin();

  var rows = ws
    .getDataRange()
    .getDisplayValues();
    
  return rows;
}

function updateSpreadsheet(row, data){
  internals.checkLogin();

  ws
    .getRange(row+1, 1, 1, data.length)
    .setValues([data]);
  
  return "DONE";
}

function setStatus(row, status){
  internals.checkLogin(); 
  
  var column = parseInt(columnMap["pm_assigned_status"]);
  ws
    .getRange(row+1, column+1, 1, 1)
    .setValues([[status]]);
  
  return status;
}

// app entry point
function doGet() {
  var page = HtmlService.createTemplateFromFile('index');
 
  return page.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=500px');;
}