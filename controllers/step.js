const { Step } = require("../db/models/step")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addStep = promise( async (req, res) => {
    const newStep = new Step({
        ...req.body
    })
    await newStep.save()
    throw new Exceptions.Success
})

exports.getAllSteps = promise( async (req, res) => {
    const step = await Step.find()
    if(!step) throw new Exceptions.NotFound

    res.status(200).json({ step })
})