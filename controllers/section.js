const { Section } = require("../db/models/section")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addSection = promise(async (req, res) => {
    const newSection = new Section({
        ...req.body
    })

    await newSection.save()
    res.status(200).json({ message: "Successfully added section" })
})

exports.getSection = promise(async (req, res) => {
    const section = await Section.find({ serviceId: req.body.serviceId })
    if (!section) throw new Exceptions.NotFound

    res.status(200).json({ section })
})