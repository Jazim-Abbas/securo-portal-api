const express = require("express")
const router = express.Router()
const question = require("../controllers/question")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addquestionSchemaForStep1, addquestionSchemaForStep2, getquestionSchemaForStep } = require("../validation/question")

router.post("/add-for-step1", validation(addquestionSchemaForStep1), question.addQuestion)
router.post("/add-for-step2", validation(addquestionSchemaForStep2), question.addQuestion)
router.post("/get-for-specificstep", validation(getquestionSchemaForStep), question.getQuestion)

module.exports = router
