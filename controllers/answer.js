const { Answer } = require("../db/models/answer")
const { Question } = require("../db/models/question")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addAnswerForStep1 = promise(async (req, res) => {
    res.json("Add answers for step 1")
})

exports.addAnswerForStep2 = promise(async (req, res) => {

    const body = req.body

    const question = await Question.find({ stepId: body[0].stepId })
    if (!question) throw new Exceptions.NotFound

    console.log(question.length)

    const answer = await Answer.findOne({ stepId: body[0].stepId, userId: req.user._id })

    if (answer) throw new Exceptions.BadRequset("You have already submitted answers for this step")

    Answer.insertMany(body)

    res.status(200).json("Successfully Inserted Answers")
})

exports.addAnswerForSection = promise(async (req, res) => {

    const body = req.body

    const question = await Question.find({ sectionId: body[0].sectionId })
    if (!question) throw new Exceptions.NotFound

    console.log(question.length)

    const answer = await Answer.findOne({ userId: req.user._id, sectionId: body[0].sectionId })

    if (answer) throw new Exceptions.BadRequset("You have already submitted answers for this section")

    Answer.insertMany(body)

    res.status(200).json("Successfully Inserted Answers")
})