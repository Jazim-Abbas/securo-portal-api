const express = require("express")
const router = express.Router()
const answer = require("../controllers/answer")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addAnswerSchemaForStep, addAnswerSchemaForSection } = require("../validation/answer")

const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, fileName) => {
        return fileName(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
})

router.post("/add-for-step", authentication, answer.addAnswerForStep)
router.post("/get", authentication, answer.getAnswer)
router.post("/add-for-section", authentication, answer.addAnswerForSection)
router.post("/upload-image", authentication, upload.single("image"), answer.uploadImageForAndStepSection)
router.post("/upload-multiple", authentication, upload.array("image"), answer.uploadImagesForSection)

module.exports = router