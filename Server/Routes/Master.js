const express = require('express');

const masterRouter = express.Router();
const masterfunc = require('../Models/Master/User');
const master = new masterfunc();

masterRouter.post('/user/:action', (req, res) => {
    master.user(req, (err, result) => {
        if (err) {
            res.json({ 'status': true, 'result': err })
        } else {
            res.json({ 'status': false, 'result': result })
        }
    })
})
// masterRouter.use('/employee/:action', (req, res) => {
//     master.employee(req, (err, result) => {
//         if (err) {
//             res.json({ status: false, result: err })
//         } else {
//             res.json({ status: true, result: result })
//         }
//     })
// })

module.exports = masterRouter;