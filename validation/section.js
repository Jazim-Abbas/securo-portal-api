const yup = require("yup")

exports.addSectionSchema = yup.object({
    sectionTitle: yup.string().required(),
    serviceId: yup.string().required(),
})

exports.getSectionSchema = yup.object({
    serviceId: yup.string().required(),
})