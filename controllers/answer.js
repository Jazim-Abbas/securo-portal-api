const { Answer } = require("../db/models/answer")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addAnswerForStep1 = promise( async (req, res) => {
    res.json("Add answers for step 1")
})

exports.addAnswerForStep2 = promise(async (req, res) => {
    res.json("Add answers for step 2")
})