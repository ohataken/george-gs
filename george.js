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
