
const db = require('./DB/index')
const express = require('express');
const cors = require('cors');
const app = express();

const bodyparse = require('body-parser');
app.use(bodyparse.urlencoded({ extended: true }))
app.use(bodyparse.json())

app.use(cors())
app.use(express.json());

// app.use(require('./Routes/commonRoute'))


const { masterRouter } = require("../Server/Routes/commonRoute")

app.use('/master', masterRouter)






app.listen(3001, () => {
    console.log('backend server is running')
})