const yup = require("yup")

exports.addStepSchema = yup.object({
    stepTitle: yup.string().required(),
})

exports.getSingleStepSchema = yup.object({
    stepId: yup.string().required(),
})