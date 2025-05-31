// import express from 'express';
// import { google } from 'googleapis';
// import open from 'open';
// import dotenv from 'dotenv';

// dotenv.config();
// const app = express();
// const port = 3000;

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT_URI
// );

// app.get('/auth', (req, res) => {
//   const authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: [
//       'https://www.googleapis.com/auth/calendar.readonly',
//       'https://www.googleapis.com/auth/spreadsheets'
//     ]
//   });
//   res.redirect(authUrl);
// });

// app.get('/oauth2callback', async (req, res) => {
//   const { code } = req.query;
//   const { tokens } = await oauth2Client.getToken(code);
//   oauth2Client.setCredentials(tokens);

//   // Inicializa o cliente do Google Calendar
// const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// try {
//   const eventsResponse = await calendar.events.list({
//     calendarId: 'primary',
//     timeMin: new Date().toISOString(),
//     maxResults: 3,
//     singleEvents: true,
//     orderBy: 'startTime'
//   });

//   const events = eventsResponse.data.items || [];

//   if (events.length === 0) {
//     console.log('✅ Acesso ao Google Calendar OK, mas nenhum evento encontrado.');
//   } else {
//     console.log('✅ Acesso ao Google Calendar OK. Próximos eventos:');
//     events.forEach(event => {
//       const start = event.start.dateTime || event.start.date;
//       console.log(`📅 ${event.summary} - Início: ${start}`);
//     });
//   }
// } catch (err) {
//   console.error('❌ Erro ao acessar o Google Calendar:', err.message);
//   return res.send('<h2>Erro ao acessar o Google Calendar. Veja o log do servidor.</h2>');
// }
// });

// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
//   open('http://localhost:3000/auth');
// });

import express from 'express';
import dotenv from 'dotenv';
import calendarRoutes from './routes/calendarRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/calendar', calendarRoutes);

app.listen(port, () => {
  console.log(`✅ Servidor rodando em http://localhost:${port}`);
});

