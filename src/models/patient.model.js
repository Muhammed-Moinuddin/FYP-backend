const patientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'NormalUser' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    age: { type: Number, required: true },
    time: { type: Date, default: Date.now },
    conflict: { type: String },
    eyeDiseaseBefore: { type: String },
    otherProblems: { type: String },
    medicalHistory: { type: String },
    contactInfo: { type: String },
    previousScans: { type: [String] }
});