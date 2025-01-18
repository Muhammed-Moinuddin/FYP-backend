const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        universities: { type: [String], required: [true, "University data is required"] },
        degrees: { type: [String], required: [true, "Degrees data is required"] },
        certifications: { type: [String] },
        experience: { type: Number, required: [true, "Years of experience is required"] },
        specializations: { type: [String] },
        servicesOffering: {type: [String]},
        clinicHospitalName: { type: String }
    },
    patientProfiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }]
},
{
    timestamps: true
}
);