const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")

const user = require("./routes/user")
const step = require("./routes/step")
const question = require("./routes/question")
const service = require("./routes/service")
const answer = require("./routes/answer")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/user", user)
app.use("/step", step)
app.use("/question", question)
app.use("/service", service)
app.use("/answer", answer)

module.exports = { app }