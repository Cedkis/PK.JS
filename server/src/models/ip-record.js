import mongoose from 'mongoose';

const IPRecordSchema = new mongoose.Schema({
  ip: { type: String, require: true }, // for easier searching
  ipMask: { type: Number, require: true },
  server: { type: Number, require: true },
  player: { type: String, require: true },

  lastSeen: { type: Date, default: new Date() }
});

export default mongoose.model('IPRecord', IPRecordSchema);