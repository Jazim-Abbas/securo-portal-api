const mongoose = require("mongoose")
const schema = mongoose.Schema

const questionSchema = new schema({
    title: {
        type: String,
        require: true
    },
    description: {
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