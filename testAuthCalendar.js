// Inicializa o cliente do Google Calendar
const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

try {
  const eventsResponse = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 3,
    singleEvents: true,
    orderBy: 'startTime'
  });

  const events = eventsResponse.data.items || [];

  if (events.length === 0) {
    console.log('✅ Acesso ao Google Calendar OK, mas nenhum evento encontrado.');
  } else {
    console.log('✅ Acesso ao Google Calendar OK. Próximos eventos:');
    events.forEach(event => {
      const start = event.start.dateTime || event.start.date;
      console.log(`📅 ${event.summary} - Início: ${start}`);
    });
  }
} catch (err) {
  console.error('❌ Erro ao acessar o Google Calendar:', err.message);
  return res.send('<h2>Erro ao acessar o Google Calendar. Veja o log do servidor.</h2>');
}
