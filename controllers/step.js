const { Step } = require("../db/models/step")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addStep = promise( async (req, res) => {
    const newStep = new Step({
        ...req.body
    })
    await newStep.save()
    res.status(200).json({ message: "Successfully added steps" })
})

exports.getAllSteps = promise( async (req, res) => {
    const step = await Step.find()
    if(!step) throw new Exceptions.NotFound

    res.status(200).json({ step })
})

exports.getSingleSteps = promise(async (req, res) => {
    const step = await Step.findOne({_id: req.body.stepId})
    if (!step) throw new Exceptions.NotFound

    res.status(200).json({ step })
})