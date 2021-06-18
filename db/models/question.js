const mongoose = require("mongoose")
const schema = mongoose.Schema

const questionSchema = new schema({
    questionTitle: {
        type: String,
        require: true
    },
    questionDescription: {
        type: String,
        require: true
    },
    sectionId: {
        type: schema.Types.ObjectId,
        ref: "Section",
    },
    stepId: {
        type: schema.Types.ObjectId,
        ref: "Step",
    }
})

exports.Question = mongoose.model("Question", questionSchema)