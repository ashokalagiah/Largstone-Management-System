const express = require('express');

const InvoiceRouter = express.Router();
const InvoiceMod = require('../Modules/Invoice');
const Invoice = new InvoiceMod();

InvoiceRouter.post('/invoice/:action', (req, res) => {
    Invoice.InvoiceModule(req, (err, result) => {
        if (err) {
            res.json({ 'status': true, 'result': err });
        } else {
            res.json({ 'status': false, 'result': result });
        }
    });
});

module.exports = InvoiceRouter;