const express = require("express")
const router = express.Router()
const step = require("../controllers/step")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addStepSchema, getSingleStepSchema } = require("../validation/step")

router.post("/add", validation(addStepSchema) , step.addStep)
router.get("/get-all", step.getAllSteps)
router.post("/get-single", validation(getSingleStepSchema), step.getSingleSteps)

module.exports = router