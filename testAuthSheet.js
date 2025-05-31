const sheetInfo = await sheets.spreadsheets.get({
  spreadsheetId: process.env.SPREADSHEET_ID
});
console.log(sheetInfo.data);
