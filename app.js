const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")

const user = require("./routes/user")
const step = require("./routes/step")
const question = require("./routes/question")
const service = require("./routes/service")
const answer = require("./routes/answer")
const section = require("./routes/section")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", async (req, res) => {
    res.status(200).json({ message: "Securo Portal Rest Api" })
})

app.use("/user", user)
app.use("/step", step)
app.use("/question", question)
app.use("/service", service)
app.use("/answer", answer)
app.use("/section", section)

module.exports = { app }