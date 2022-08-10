function openActiveSpreadsheet(callback) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  callback(ss);
  return ss;
}

function openSpreadsheetById(id, callback) {
  const ss = SpreadsheetApp.openById(id);
  callback(ss);
  return ss;
}

function openSpreadsheetByUrl(url, callback) {
  const ss = SpreadsheetApp.openByUrl(url);
  callback(ss);
  return ss;
}

function openActiveSheet(callback) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  callback(sheet, lastRow, lastColumn);
  return sheet;
}

function openSheetByName(ss, name, callback) {
  const sheet = ss.getSheetByName(name);
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  callback(sheet, lastRow, lastColumn);
  return sheet;
}

function eachRowIndex(startRow, startColumn, rows, columns, callback) {
  for (let i = startRow; i <= startRow + rows; ++i) {
    callback(i, startColumn, 1, columns);
  }
}

function pushRow(csv, callback) {
  const row = [];
  csv.push(callback(row));
}

function openCsv(sheet) {
  const args = Array.from(arguments);
  const callback = args.slice(-1)[0];
  const range = sheet.getRange.apply(sheet, args.slice(1, -1));
  const csv = range.getValues();
  callback(csv);
  return csv;
}

function changeCsv(sheet) {
  const args = Array.from(arguments);
  const callback = args.slice(-1)[0];
  const range = sheet.getRange.apply(sheet, args.slice(1, -1));
  const csv = callback(range.getValues(), range);
  sheet.getRange(args[1], args[2], csv.length || 0, csv[0].length || 0).setValues(csv);
  return csv;
}
