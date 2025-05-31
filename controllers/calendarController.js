import { getFreeBusy } from '../services/googleCalendar.js';
import { gerarSlotsDisponiveis } from '../utils/generateTimeSlots.js';
import FreeBusyLog from '../models/FreeBusyLog.js';

export const consultarHorarios = async (req, res) => {
  try {
    const busySlots = await getFreeBusy();
    const availableSlots = gerarSlotsDisponiveis(busySlots);

    await FreeBusyLog.create({
      calendarId: 'multiple_calendars',
      availableSlots: availableSlots.map(slot => `${slot.start} - ${slot.end}`)
    });

    res.json({ availableSlots });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar disponibilidade.' });
  }
};
