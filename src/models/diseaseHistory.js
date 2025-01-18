import mongoose, {Schema} from "mongoose";

const diseaseHistorySchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    history: [{
        scanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scan', required: true },
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
        diseaseName: { type: String, required: true },
        probability: { type: Number, required: true },
        date: { type: Date, default: Date.now }
    }]
});