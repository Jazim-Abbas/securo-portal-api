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

exports.updateQuestion = promise( async (req, res) => {

    const body = req.body
    const question = await Question.findById(body.questionId)
    if (!question) throw new Exceptions.NotFound

    await Question.updateOne(
        {_id: body.questionId},
        {
            $set: {
                ...body
            }
        }
    )
    res.status(200).json({ message: "Successfully updated question" })
})