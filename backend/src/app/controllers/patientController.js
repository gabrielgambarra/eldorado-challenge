const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const Patient = require('../../app/models/patient');

router.get('/all', async (req, res) => {
    try {
        const patients = await Patient.find();

        return res.status(200).send({ patients });

    } catch (err) {
        return res.status(400).send({ message: 'Error on get patients' });
    }
});

router.post('/create', async (req, res) => {
    const { name } = req.body;

    try {
        if (await Patient.findOne({ name })) {
            return res.status(401).send({ message: 'Patient already exists' });
        }

        const patient = await Patient.create(req.body);

        res.status(201).send({ patient });

    } catch (err) {
        return res.status(400).send({ message: 'Registration failed', err });
    }
});

module.exports = app => app.use('/patient', router);
