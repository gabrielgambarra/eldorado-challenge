const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

const Scheduling = require('../../app/models/scheduling');

router.get('/all', async (req, res) => {
    try {
        const schedules = await Scheduling.find().populate(['doctor', 'patient']);

        return res.status(200).send({ schedules });

    } catch (err) {
    return res.status(400).send({ message: 'Error on get schedules' });
    }
});

router.post('/create', async (req, res) => {

    try {
        if (await Scheduling.findOne(req.body)) {
            return res.status(401).send({ message: 'Scheduling already exists' });
        }

        const scheduling = await (await Scheduling.create(req.body));

        res.status(201).send({ scheduling });
        
    } catch (err) {
        return res.status(400).send({ message: 'Registration failed', err });
    }
});

module.exports = app => app.use('/schedule', router);
