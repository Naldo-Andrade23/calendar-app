const sheetInfo = await sheets.spreadsheets.get({
  spreadsheetId: "1a2B3cD4EFgh567IJKLMnOpQRstuvWxyz "//process.env.SPREADSHEET_ID
});
console.log(sheetInfo.data);
