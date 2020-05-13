const mongoose = require('../../database');

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    }
}, { versionKey: false });

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;