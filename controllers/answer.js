const { Answer } = require("../db/models/answer")
const { Question } = require("../db/models/question")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addAnswerForStep1 = promise(async (req, res) => {
    res.json("Add answers for step 1")
})

exports.addAnswerForStep2 = promise(async (req, res) => {
    // res.json("Add answers for step 2")

    const body = req.body

    const answer = await Answer.findOne({stepId: body.stepId, userId: req.user._id})

    if(answer) throw new Exceptions.BadRequset("You have already submitted answers for this step")

    const newAnswer = ([
        {
            answer: body.answer1,
            questionId: body.questionId1,
            userId: req.user._id,
            stepId: body.stepId
        },
        {
            answer: body.answer2,
            questionId: body.questionId2,
            userId: req.user._id,
            stepId: body.stepId
        },
        {
            answer: body.answer3,
            questionId: body.questionId3,
            userId: req.user._id,
            stepId: body.stepId
        },
        {
            answer: body.answer4,
            questionId: body.questionId4,
            userId: req.user._id,
            stepId: body.stepId
        },
        {
            answer: body.answer5,
            questionId: body.questionId5,
            userId: req.user._id,
            stepId: body.stepId
        }
    ])

    Answer.insertMany(newAnswer)

    res.status(200).json("Successfully Inserted Answers")

    // const question = await Question.find({ stepId: body.stepId })
    // if (!question) throw new Exceptions.NotFound

    // console.log(question.length)

    // for (var i = 1; i <= question.length; i++) {

    //     console.log(body.answer1);
    //     console.log(`body.answer${i}`)
    //     answer + i
    //     "answer" + i

    //     var answer = `body.answer${i}`
    //     var questionId = `body.questionId${i}`

    //     console.log(typeof(body.questionId + i))

    //     var newAnswer = await [(
    //         {
    //             answer: body.answer+i,
    //             questionId: body.questionId+i,
    //             userId: req.user._id
    //         }
    //     )]

    //     console.log(newAnswer)

    //     // res.status(200).json("Successfully Inserted Answers")
    // }


})