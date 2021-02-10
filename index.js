const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const SignUpRouter = require('./routes/SignUp');
const SignInRouter = require('./routes/SignIn')
const app = express();

mongoose.connect("mongodb://localhost/gamburger", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Hammasi joyida...");
    })
    .catch((err) => {
        console.log("Ulanib bo'lmadi...")
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/SignUp', SignUpRouter);
app.use('/SignIn',SignInRouter);
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})



app.listen(2000);