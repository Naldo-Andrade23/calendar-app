//console.log(sheetInfo.data);


  // Calendar: buscar próximos 5 eventos
//   const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
//   const eventsResponse = await calendar.events.list({
//     calendarId: 'primary',
//     timeMin: new Date().toISOString(),
//     maxResults: 5,
//     singleEvents: true,
//     orderBy: 'startTime'
//   });

//   const events = eventsResponse.data.items || [];

  // Sheets: escrever os eventos
//   const sheets = google.sheets({ version: 'v4', auth: oauth2Client });
//   const values = events.map(event => [
//     event.summary || 'Sem título',
//     event.start.dateTime || event.start.date,
//     event.end.dateTime || event.end.date
//   ]);

//   await sheets.spreadsheets.values.update({
//     spreadsheetId: process.env.SPREADSHEET_ID,
//     range: 'A1',
//     valueInputOption: 'RAW',
//     requestBody: {
//       values: [['Título', 'Início', 'Fim'], ...values]
//     }
//   });

//   res.send(`<h2>${events.length} eventos exportados para o Google Sheets.</h2>`);