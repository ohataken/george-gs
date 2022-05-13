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

function openSheetByName(ss, name, callback) {
  const sheet = ss.getSheetByName(name);
  callback(sheet);
  return sheet;
}

function pushRow(csv, callback) {
  const row = [];
  callback(row);
  csv.push(row);
}

function openCsv(sheet) {
  const args = Array.from(arguments);
  const callback = args.slice(-1)[0];
  const range = sheet.getRange.apply(sheet, args.slice(1, -1));
  const csv = range.getValues();
  callback(csv);
  return csv;
}
