const express = require("express")
const router = express.Router()
const step = require("../controllers/step")

router.post("/add", step.addStep)
router.get("/get", step.getAllSteps)

module.exports = router