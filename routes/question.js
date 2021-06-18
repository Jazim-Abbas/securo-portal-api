const express = require("express")
const router = express.Router()
const question = require("../controllers/question")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addquestionSchemaForStep, getquestionSchemaForStep } = require("../validation/question")

router.post("/add-for-step", validation(addquestionSchemaForStep), question.addQuestion)
router.post("/get-for-specificstep", validation(getquestionSchemaForStep), question.getQuestion)

module.exports = router
