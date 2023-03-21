
// const db = require('../../DB/index')
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.post('/', (req, res) => {

//     const { CompanyID, Role, EmployeeName, EmailId, Contact, Password, Status, Address, Location } = req.body;

//     var user = [CompanyID, Role, EmployeeName, EmailId, Contact, Password, Status, Address, Location]

//     db.query("insert into user (CompanyID,Role,EmployeeName,EmailId,Contact,Password,Status,Address,Location) values(?,?,?,?,?,?,?,?,?)", user, (err, result) => {
//         if (err) {
//             res.json({ 'status': false })
//         } else {
//             res.json({ 'status': false })
//         }
//         console.log('posted', result)
//     })
// })
// app.get('/', (req, res) => {
//     db.query('select * from user', (err, result) => {
//         if (err) throw err;
//         res.json(result);
//     })
// })
// app.delete('/', (req, res) => {
//     const id = req.params.id;
//     db.query('delete from user where id=?', id, (err, result) => {
//         if (err) throw (err);
//         db.query('Select * from user')

//     })

// })
// module.exports = app;


const express = require('express');
const common = require('../../CommonQuery');
const commonfunc = new common()
function User() {

}
User.prototype.user = function (req, cbk) {
    const action = req.params.action
    const self = this

    switch (action) {
        case 'View':
            self.View(req, cbk)
            break;
        case 'Edit':
            self.Edit(req, cbk)
            break;
        case 'post':
            self.Post(req, cbk)
            break;
        case 'delete':
            self.Delete(req, cbk)
            break;
        case 'selectId':
            self.SelectId(req, cbk)
            break;
        case 'update':
            self.update(req, cbk)
            break;
        default:
            console.log(Status = 'false', err = 'not uploaded')
    }
}
User.prototype.View = function (req, cbk) {
    let sql = 'select * from user'
    commonfunc.Retrive(sql, function (err, result) {
        if (err) {
            cbk(true, err)
        }
        else {
            cbk(false, result)

        }
    })
}

User.prototype.Post = function (req, cbk) {
    const { CompanyID, Role, EmployeeName, EmailId, Contact, Password, Status, Address, Location } = req.body;

    let sql = `insert into user (CompanyID,Role,EmployeeName,EmailId,Contact,Password,Status,Address,Location) values('${CompanyID}','${Role}','${EmployeeName}','${EmailId}','${Contact}','${Password}','${Status}','${Address}','${Location}')`


    commonfunc.Retrive(sql, function (err, result) {
        if (err) {
            cbk(true, err)
        } else {
            cbk(false, result)
        }

    })
}
User.prototype.Delete = function (req, cbk) {
    let id = req.body.id
    let sql = `delete from user where id=${id}`
    commonfunc.Retrive(sql, function (err, result) {
        if (err) {
            cbk(true, err);
        }
        else {
            cbk(false, result);
        }
    })
}
User.prototype.update = function (req, cbk) {
    let { id, CompanyID, Role, EmployeeName, EmailId, Contact, Password, Status, Address, Location } = req.body;

    let sql = `update user set CompanyID='${CompanyID}' Role='${Role}',EmployeeName='${EmployeeName}',EmailId='${EmailId}',Contact='${Contact}',Password='${Password}',Status='${Status}',Address='${Address}',Location='${Location}' where id=${id}`

    commonfunc.Retrive(sql, function (err, result) {
        if (err) {
            cbk(true, err);
        }
        else {
            // console.log(result);
            cbk({ 'status': false, 'result': result });
        }
    })
}
User.prototype.SelectId = function (req, cbk) {
    const { id } = req.body;
    let sql = `select * from user where id=${id}`
    commonfunc.Retrive(sql, function (err, result) {
        if (err) {
            cbk(true, err);
        }
        else {
            cbk(false, result);
        }
    })
}

module.exports = User;

