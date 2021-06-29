const express = require("express")
const router = express.Router()
const question = require("../controllers/question")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addquestionSchemaForStep1, addquestionSchemaForStep2, getquestionSchemaForStep, addquestionSchemaForSection2, getquestionSchemaForSection } = require("../validation/question")

router.post("/update", question.updateQuestion)
router.get("/get-upload", question.getUploadQuestion)
router.post("/add-for-step1", validation(addquestionSchemaForStep1), question.addQuestion)
router.post("/add-for-step2", validation(addquestionSchemaForStep2), question.addQuestion)
router.post("/add-for-section", validation(addquestionSchemaForSection2), question.addQuestion)
router.post("/get-for-specificstep", validation(getquestionSchemaForStep), question.getQuestion)
router.post("/get-for-section", validation(getquestionSchemaForSection), question.getSectionQuestion)


module.exports = router
