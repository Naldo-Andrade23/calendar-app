// import { getFreeBusy } from '../services/googleCalendar.js';
// import { gerarSlotsDisponiveis } from '../utils/generateTimeSlots.js';

// export const consultarHorarios = async (req, res) => {
//   try {
//     const busySlots = await getFreeBusy();
//     const availableSlots = gerarSlotsDisponiveis(busySlots);

//     res.json({ availableSlots });
//   } catch (err) {
//     res.status(500).json({ error: 'Erro ao consultar disponibilidade.' });
//   }
// };


import { listarEventos, cancelarEvento } from '../services/googleCalendar.js';

export const obterEventos = async (req, res) => {
  const { calendarId } = req.query;

  try {
    const eventos = await listarEventos(calendarId);
    res.json({ eventos });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar eventos.' });
  }
};

export const excluirEvento = async (req, res) => {
  const { calendarId, eventId } = req.body;

  try {
    const resposta = await cancelarEvento(calendarId, eventId);
    res.json(resposta);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir evento.' });
  }
};
