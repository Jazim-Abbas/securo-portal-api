const mongoose = require("mongoose")

exports.connection = mongoose.connect("mongodb://localhost:27017/securo-portal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})