const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');

const streetSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 5,
        maxlength: 20
    },
    password: {
        type: Number,
        required: true,
    }
});

const Street = new mongoose.model("Street", streetSchema);

let validate = (req) => {
    let schema = Joi.object({
        username: Joi.string().min(5).max(20).required(),
        password: Joi.number().required()
    });
    return schema.validate(req);
}

module.exports.validate = validate;
module.exports.Street = Street;