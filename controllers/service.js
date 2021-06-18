const { Service } = require("../db/models/service")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addService = promise( async (req, res) => {
    res.json("Abc")
})