const db = require('./DB/index');

const common = function () {
    { this.table = db; }
};

common.prototype.Retrive = function (query, cbk) {
    var self = this;
    self.table.query(query, function (err, result) {
        if (err) {
            cbk(true, err);

        } else {
            cbk(false, result);
        }
    });
};

common.prototype.create = function (query, body, cbk) {
    var self = this;
    self.table.query(query, body,function (err, result)  {
        if (err) {
            cbk(err, err);

        } else {
            cbk(false, result);
        }
    });
};

common.prototype.listall = function (query, cbk) {
    var self = this;
    self.table.query(query, function (err, result) {
        if (err) {
            console.log(err, 'error');
            cbk(err, err);
        } else {
            cbk(false, result);
        }
    });
};

common.prototype.delete = function (query, id, cbk) {
    var self = this;
    self.table.query(query, id, function (err, result) {
        if (err) {
            cbk(err, err);

        } else {
            cbk(false, result);
        }
    });
};

common.prototype.update = function (query, content, id, cbk) {
    var self = this;
    self.table.query(query, content, id, function (err, result) {
        if (err) {
            cbk(err, err);
            console.log(err);
        } else {
            cbk(false, result);
        }
    });
};

common.prototype.listByID = function (query, id, cbk) {
    var self = this;
    self.table.query(query, id, function (err, result) {
        if (err) {
            cbk(err, err);

        } else {
            cbk(false, result);
        }
    });
};

module.exports = common;