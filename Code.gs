var SPREADSHEET_ID = 'XXX_spreadsheet_ID_goes_here_XXX';
var appPw = 'XXX_password_here_XXX';
var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
var worksheet = spreadsheet.getSheets()[0];

var clientPw;

function checkLogin() {
  if (clientPw !== appPw) throw "Not Logged In.";
}

function tryLogin(pw){
  if (pw !== appPw) return "NOPE";
 
  clientPw = pw;
  return "OK";
}

function getSpreadsheet(){
  checkLogin();

  var rows = worksheet
    .getDataRange()
    .getDisplayValues();
    
  return rows;
}

function updateSpreadsheet(columnMap, row, data){
  checkLogin();

  worksheet
    .getRange(row+1, 1, 1, data.length)
    .setValues([data]);
  
  return "DONE";
}

function setStatus(columnMap, row, status){
  checkLogin(); 
  
  var column = parseInt(columnMap["pm_assigned_status"]);
  worksheet
    .getRange(row+1, column+1, 1, 1)
    .setValues([[status]]);
  
  return status;
}

function doGet() {
  var page = HtmlService.createTemplateFromFile('Form');
 
  return page.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=500px');;
}