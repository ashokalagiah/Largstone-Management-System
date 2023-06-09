const express = require('express');

const RegistrationRouter = express.Router();
const RegistrationMod = require('../Modules/Registration');
const Register = new RegistrationMod();

RegistrationRouter.post('/register/:action', (req, res) => {
    Register.RegistrationModule(req, (err, result) => {
        if (err) {
            res.json({ 'status': true, 'result': err });
        } else {
            res.json({ 'status': false, 'result': result });
        }
    });
});

module.exports = RegistrationRouter;