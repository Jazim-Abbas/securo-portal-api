const yup = require("yup")

exports.addAnswerSchema = yup.object({
    answer: yup.string().required(),
    questionId: yup.string().required(),
})
