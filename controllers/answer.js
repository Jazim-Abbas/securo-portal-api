const { Answer } = require("../db/models/answer")
const { Question } = require("../db/models/question")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addAnswerForStep = promise(async (req, res) => {

    const { answers } = req.body

    // const question = await Question.find({ stepId: body[0].stepId })
    // if (!question) throw new Exceptions.NotFound

    // console.log(question.length)

    // const answer = await Answer.findOne({ stepId: body[0].stepId, userId: req.user._id })

    // if (answer) throw new Exceptions.BadRequset("You have already submitted answers for this step")

    Answer.insertMany(answers)

    res.status(200).json("Successfully Inserted Answers")
})

exports.addAnswerForSection = promise(async (req, res) => {

    const { answers } = req.body

    // const question = await Question.find({ sectionId: body[0].sectionId })
    // if (!question) throw new Exceptions.NotFound

    // console.log(question.length)

    // const answer = await Answer.findOne({ userId: req.user._id, sectionId: body[0].sectionId })

    // if (answer) throw new Exceptions.BadRequset("You have already submitted answers for this section")

    Answer.insertMany(answers)

    res.status(200).json("Successfully Inserted Answers")
})

exports.uploadImageForAndStepSection = promise(async (req, res) => {

    const body = req.body

    const answer = await Answer.findOne({ userId: req.user._id, questionId: body.questionId })

    if (answer) {
        await Answer.updateOne(
            { userId: req.user._id, questionId: body.questionId },
            {
                $set:
                {
                    ...req.body,
                    imageURL1: req.file.filename,
                    userId: req.user._id,
                }
            })
        res.status(200).json({ message: "Successfully updated image" })

    }
    else {
        const newAnswer = new Answer({
            ...req.body,
            imageURL1: req.file.filename,
            userId: req.user._id,
        })
        await newAnswer.save()
        res.status(200).json({ message: "Successfully added image" })
    }
})

exports.uploadImagesForSection = promise(async (req, res) => {
    const body = req.body

    const answer = await Answer.findOne({ userId: req.user._id, questionId: body.questionId })

    if (answer) {
        await Answer.updateOne(
            { userId: req.user._id, questionId: body.questionId },
            {
                $set:
                {
                    ...req.body,
                    imageURL1: req.files[0].filename,
                    imageURL2: req.files[1].filename,
                    imageURL3: req.files[0].filename,
                    userId: req.user._id,
                }
            })
        res.status(200).json({ message: "Successfully updated image" })

    }
    else {
        const newAnswer = new Answer({
            ...req.body,
            imageURL1: req.files[0].filename,
            imageURL2: req.files[1].filename,
            imageURL3: req.files[0].filename,
            userId: req.user._id,
        })
        await newAnswer.save()
        res.status(200).json({ message: "Successfully added image" })
    }
})

exports.getAnswer = promise(async (req, res) => {
    const answer = await Answer.find({ userId: req.body.userId })
        .populate("userId").populate("questionId").populate("stepId").populate("sectionId")
    if (!answer) throw new Exceptions.NotFound

    res.status(200).json({ answer })
})