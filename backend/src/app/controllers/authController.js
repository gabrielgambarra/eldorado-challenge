const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = process.env.JWT_KEY;

const User = require('../../app/models/user');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig, {
        expiresIn: 86400,
     });
}

router.post('/register', async (req, res) => {

    const { email } = req.body;

    try {
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.status(201).send({
            user,
            token: generateToken({ id: user.id }),
        });
    } catch (err) {
        return res.status(400).send({ message: 'Registration failed', err });
    }
});

router.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).send();
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(401).send();
    }

    user.password = undefined;

    res.send({ user,
        token: generateToken({ id: user.id }),
    });
});

module.exports = app => app.use(router);
