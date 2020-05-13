const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const Doctor = require('../../app/models/doctor');

router.get('/all', async (req, res) => {
    try {
        const doctors = await Doctor.find();

        return res.status(200).send({ doctors });

    } catch (err) {
        return res.status(400).send({ message: 'Error on get doctors' });
    }
});

router.post('/create', async (req, res) => {
    const { name } = req.body;

    try {
        if (await Doctor.findOne({ name })) {
            return res.status(401).send({ message: 'Doctor already exists' });
        }

        const doctor = await Doctor.create(req.body);

        res.status(201).send({ doctor });

    } catch (err) {
        return res.status(400).send({ message: 'Registration failed', err });
    }
});

module.exports = app => app.use('/doctor', router);
