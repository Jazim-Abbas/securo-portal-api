const mongoose = require("mongoose")
const schema = mongoose.Schema

const questionSchema = new schema({
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

exports.Question = mongoose.model("Question", questionSchema)