const mongoose = require('../../database');

const SchedulingSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
}, { versionKey: false });

const Scheduling = mongoose.model('Scheduling', SchedulingSchema);

module.exports = Scheduling;