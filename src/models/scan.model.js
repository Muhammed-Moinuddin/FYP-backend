const scanSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    scanImage: { type: String, required: true },
    diseaseName: { type: String },
    probability: { type: Number },
    date: { type: Date, default: Date.now }
});