const yup = require("yup")

exports.addAnswerSchema = yup.object({
    stepId: yup.string().required(),
    answer1: yup.string().required(),
    questionId1: yup.string().required(),
    answer2: yup.string().required(),
    questionId2: yup.string().required(),
    answer3: yup.string().required(),
    questionId3: yup.string().required(),
    answer4: yup.string().required(),
    questionId4: yup.string().required(),
    answer5: yup.string().required(),
    questionId5: yup.string().required(),
})
