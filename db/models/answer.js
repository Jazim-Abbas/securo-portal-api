const mongoose = require("mongoose")
const schema = mongoose.Schema

const answerSchema = new schema({
    answer: {
        type: String,
        require: true
    },
    userId: {
        type: schema.Types.ObjectId,
        ref: "User",
    },
    questionId: {
        type: schema.Types.ObjectId,
        ref: "Question",
    },
})

exports.Answer = mongoose.model("Answer", answerSchema)