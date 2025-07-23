const mongoose = require("mongoose")

const jobSchema =new mongoose.Schema({
    title: String,
    type: String,
    salary: Float32Array,
    mode: String,
    experience: String,
    function: String,
    location: String,
    post_date: {
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("Job", jobSchema)