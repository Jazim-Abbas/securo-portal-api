const yup = require("yup")

exports.addquestionSchemaForStep1 = yup.object({
    questionTitle: yup.string().required(),
    stepId: yup.string().required()
})

exports.addquestionSchemaForStep2 = yup.object({
    questionTitle: yup.string().required(),
    questionDescription: yup.string().required(),
    stepId: yup.string().required()
})

exports.getquestionSchemaForStep = yup.object({
    stepId: yup.string().required()
})