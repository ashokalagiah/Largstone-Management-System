const express = require("express");
const common = require("../CommonQuery");
const db = require("../DB/index");
const commonfunc = new common();
function Registration() {}
Registration.prototype.RegistrationModule = function (req, cbk) {
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


Registration.prototype.listall = function (req, cbk) {
  let query = "SELECT * FROM registration_list";
  commonfunc.listall(query, function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Registration.prototype.create = function (req, cbk) {
  var query = `INSERT INTO registration_list SET ?`;
  commonfunc.create(query, req.body, function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Registration.prototype.update = function (req, cbk) {
  let id = req.body.RegID;
  let query = `UPDATE registration_list SET ? WHERE RegID=?`;
  commonfunc.update(query, [req.body, id], function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Registration.prototype.delete = function (req, cbk) {
  let id = req.body.RegID;
  let query = `DELETE FROM registration_list WHERE RegID=?`;
  commonfunc.delete(query, id, function (err, result) {
    if (err) {
      cbk(err, err);
    } else {
      cbk(false, result);
    }
  });
};

Registration.prototype.listbyid = function (req, cbk) {
    let id = req.body.RegID;
    let query = `SELECT * FROM registration_list WHERE RegID=?`;
    commonfunc.listByID(query, id, function (err, result) {
        if (err) {
            cbk(err, err);
        } else {
            cbk(false, result);
        }
    });
};

module.exports = Registration;
