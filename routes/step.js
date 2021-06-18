const express = require("express")
const router = express.Router()
const step = require("../controllers/step")

router.post("/add", step.addStep)

module.exports = router