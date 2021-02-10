const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
const { validate, Street } = require('../models/SignUpmodel');
router.use(express.static('public'));
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/SignUp.html')
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(error.details[0].message);
    let user = new Street({
        username: req.body.username,
        password: req.body.password
    });
    user = await user.save();
    res.send(`${user.username} muvaffaqiyatli ro'yxatdan o'tdi!`)

})

module.exports = router;




