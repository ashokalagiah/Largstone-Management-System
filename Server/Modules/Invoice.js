const express = require('express');
const common = require('../CommonQuery');
const commonfunc = new common();
const db = require('../DB/index');

function Invoice() {}
Invoice.prototype.InvoiceModule = function (req, cbk) {
  const action = req.params.action;
  const self = this;

  switch (action) {
    case "listall":
      self.listall(req, cbk);
      break;
    case "update":
      self.update(req, cbk);
      break;
    case "create":
      self.create(req, cbk);
      break;
    case "delete":
      self.delete(req, cbk);
      break;
    case "listByID":
      self.listbyid(req, cbk);
      break;
    default:
        cbk(false, 'wrong url hit')
  }
};

Invoice.prototype.listall = function (req, cbk) {
  let query = "SELECT * FROM invoice_table";
  commonfunc.listall(query, function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Invoice.prototype.create = function (req, cbk) {
  var query = `INSERT INTO invoice_table SET ?`;
  commonfunc.create(query, req.body, function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Invoice.prototype.update = function (req, cbk) {
  let id = req.body.InvoiceID;
  let query = `UPDATE invoice_table SET ? WHERE InvoiceID=?`;
  commonfunc.update(query, [req.body, id], function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Invoice.prototype.delete = function (req, cbk) {
  let id = req.body.InvoiceID;
  let query = `DELETE FROM invoice_table WHERE InvoiceID=?`;
  commonfunc.delete(query, id, function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Invoice.prototype.listbyid = function (req, cbk) {
    let id = req.body.InvoiceID;
    let query = `SELECT * FROM invoice_table WHERE InvoiceID=?`;
    commonfunc.listByID(query, id, function (err, result) {
        if (err) {
            cbk(err, err);
        } else {
            cbk(false, result);
        }
    });
};

module.exports = Invoice;