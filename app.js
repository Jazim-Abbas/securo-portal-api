const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")
const user = require("./routes/user")
const step = require("./routes/step")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/user", user)
app.use("/step", step)

module.exports = { app }