export const gerarSlotsDisponiveis = (busySlots) => {
  let slots = [];
  let startTime = new Date();
  startTime.setHours(8, 0, 0);
  let endTime = new Date();
  endTime.setHours(18, 0, 0);

  while (startTime < endTime) {
    const slotEnd = new Date(startTime);
    slotEnd.setMinutes(slotEnd.getMinutes() + 30);

    let ocupado = false;
    for (const calendarId in busySlots) {
      busySlots[calendarId].busy.forEach(({ start, end }) => {
        const busyStart = new Date(start);
        const busyEnd = new Date(end);
        if (startTime >= busyStart && slotEnd <= busyEnd) {
          ocupado = true;
        }
      });
    }

    if (!ocupado) {
      slots.push({ start: startTime.toISOString(), end: slotEnd.toISOString() });
    }

    startTime = slotEnd;
  }

  return slots;
};
