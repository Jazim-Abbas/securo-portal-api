const { Service } = require("../db/models/service")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addService = promise( async (req, res) => {
    const newSevice = new Service({
        ...req.body
    })

    await newSevice.save()
    throw new Exceptions.Success
})

exports.getSevices = promise( async (req, res) => {
    const service = await Service.find({stepId: req.body.stepId})
    if(!service) throw new Exceptions.NotFound

    res.status(200).json({ service })
})