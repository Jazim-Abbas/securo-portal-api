const express = require("express")
const router = express.Router()
const step = require("../controllers/step")

router.post("/add", step.addStep)
router.get("/get-all-steps", step.getAllSteps)
router.post("/get-single-step", step.getSingleSteps)

module.exports = router