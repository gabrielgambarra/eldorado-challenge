const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', (req, res) => {
    res.send({ message: 'Pong' });
});

require('./app/controllers/index')(app);

app.listen(process.env.PORT);
