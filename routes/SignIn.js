const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Joi = require('joi');
const { validate, Street } = require('../models/SignUpmodel');

const router = express.Router();
router.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/SignIn.html')
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(error.details[0].message);

    const user = await Street.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if (!user) return res.send("Nimadir xato!!!");
    res.send("Hammasi to'g'ri")


})

module.exports = router;