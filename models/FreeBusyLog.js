import mongoose from 'mongoose';

const FreeBusyLogSchema = new mongoose.Schema({
  calendarId: String,
  requestedAt: { type: Date, default: Date.now },
  availableSlots: [String]
});

export default mongoose.model('FreeBusyLog', FreeBusyLogSchema);
