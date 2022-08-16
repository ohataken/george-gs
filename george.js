function eachFile(iterator, callback) {
  while (iterator.hasNext()) {
    const file = iterator.next();
    callback(file);
  }
}

function eachFolder(iterator, callback) {
  while (iterator.hasNext()) {
    const file = iterator.next();
    callback(file);
  }
}

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

function openRangeWithValues(sheet, startRow, startColumn, rows, columns, callback) {
  const range = sheet.getRange(startRow, startColumn, rows, columns);
  const values = range.getValues();
  callback(range, values);
  return range;
}

function a1toi(a1, i = 0) {
  if (0 < a1.length) {
    const charCode = a1.charCodeAt(0);
    const num = charCode - "A".charCodeAt(0) + 1;
    return a1toi(a1.slice(1), i * 26 + num);
  } else {
    return i;
  }
}

function itoa1(i, a1 = "") {
  const q = Math.floor((i - 1) / 26);
  const r = (i - 1) % 26;
  const char = String.fromCharCode("A".charCodeAt(0) + r);

  if (q === 0) {
    return char + a1;
  } else {
    return itoa1(q, char + a1);
  }
}

function createValues(callback) {
  const values = [];
  callback(values);
  return values;
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
