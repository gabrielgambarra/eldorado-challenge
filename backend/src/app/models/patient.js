const mongoose = require('../../database');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    }
}, { versionKey: false });

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;