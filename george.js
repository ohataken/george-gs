function openSpreadsheetById(id, callback) {
  const ss = SpreadsheetApp.openById(id);
  callback(ss);
  return ss;
}
