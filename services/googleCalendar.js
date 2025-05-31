import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export const getFreeBusy = async () => {
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const timeMin = new Date().toISOString();
  const timeMax = new Date();
  timeMax.setDate(timeMax.getDate() + 30);

  try {
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax: timeMax.toISOString(),
        items: [
          { id: 'calendar1@example.com' },
          { id: 'calendar2@example.com' },
          { id: 'calendar3@example.com' },
          { id: 'calendar4@example.com' }
        ]
      }
    });

    return response.data.calendars;
  } catch (err) {
    console.error('❌ Erro ao acessar FreeBusy:', err.message);
    throw err;
  }
};
