const db = require('./DB/index');

const common = function () {
    { this.table = db }
}

common.prototype.Retrive = function (query, cbk) {

    var self = this;

    self.table.query(query, (err, result) => {
        if (err) {
            cbk(true, err);

        } else {
            cbk(false, result);
        }
    })
}



module.exports = common;