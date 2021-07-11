const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./router/app');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));

//connect to databse
mongoose.connect('mongodb+srv://db:root@cluster0.m6xwi.mongodb.net/nodemongo?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
    () => console.log('CONNECTED!!!!'));


app.get('/', (req, res) => { res.send("app working"); });

app.use('/api', routes);

app.listen(3000, () => console.log("server is up and running!!"))