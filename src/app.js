
const express = require('express')
const cors = require('cors')
const router = require('./router/router')
require('./config/database')
require('dotenv/config')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", router)

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT);
})
