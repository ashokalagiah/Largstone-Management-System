const db = require('./DB/index');
const express = require('express');
const cors = require('cors');
const app = express();

const bodyparse = require('body-parser');
app.use(bodyparse.urlencoded({ extended: true }));
app.use(bodyparse.json());

app.use(cors());
app.use(express.json());

db.connect(function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("DataBase Connected");
    }
});

const { RegistrationRouter } = require("../Server/Routes/commonRoute");
app.use('/', RegistrationRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running in Port ${PORT}`);
});