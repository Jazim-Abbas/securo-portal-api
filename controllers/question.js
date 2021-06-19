const { Question } = require("../db/models/question")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addQuestion = promise(async (req, res) => {
    const newQuestion = new Question({
        ...req.body
    })

    await newQuestion.save()
    res.status(200).json({ message: "Successfully added questions" })
})

exports.getQuestion = promise(async (req, res) => {
    const question = await Question.find({ stepId: req.body.stepId })
    if (!question) throw new Exceptions.NotFound

    res.status(200).json({ question })
})

exports.getSectionQuestion = promise(async (req, res) => {
    const question = await Question.find({ sectionId: req.body.sectionId })
    if (!question) throw new Exceptions.NotFound

    res.status(200).json({ question })
})