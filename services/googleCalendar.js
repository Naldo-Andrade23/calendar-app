// import { google } from 'googleapis';

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT_URI
// );

// export const getFreeBusy = async () => {
//   const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

//   const timeMin = new Date().toISOString();
//   const timeMax = new Date();
//   timeMax.setDate(timeMax.getDate() + 30);

//   try {
//     const response = await calendar.freebusy.query({
//       requestBody: {
//         timeMin,
//         timeMax: timeMax.toISOString(),
//         items: [
//           { id: 'calendar1@example.com' },
//           { id: 'calendar2@example.com' },
//           { id: 'calendar3@example.com' }
//         ]
//       }
//     });

//     return response.data.calendars;
//   } catch (err) {
//     console.error('❌ Erro ao acessar FreeBusy:', err.message);
//     throw err;
//   }
// };

import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Função para listar eventos futuros
export const listarEventos = async (calendarId) => {
  try {
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    });

    return response.data.items;
  } catch (err) {
    console.error('❌ Erro ao buscar eventos:', err.message);
    throw err;
  }
};

// Função para cancelar um evento
export const cancelarEvento = async (calendarId, eventId) => {
  try {
    await calendar.events.delete({
      calendarId: calendarId,
      eventId: eventId
    });

    return { message: "Evento cancelado com sucesso!" };
  } catch (err) {
    console.error('❌ Erro ao cancelar evento:', err.message);
    throw err;
  }
};
