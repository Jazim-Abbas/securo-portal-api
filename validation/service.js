const yup = require("yup")

exports.addServiceSchema = yup.object({
    serviceTitle: yup.string().required(),
    stepId: yup.string().required(),
})

exports.getServiceSchema = yup.object({
    stepId: yup.string().required(),
})