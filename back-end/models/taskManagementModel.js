const mongoose = require("mongoose");

const taskModel = mongoose.Schema({
    task: { type: String },
    taskStatus: [
        {
            userRole1: { type: Boolean, default: false },
            userRole2: { type: Boolean, default: false },
            userRole3: { type: Boolean, default: false },
            userRole4: { type: Boolean, default: false },
            stage: { type: String },
            show: { type: String }
        }
    ]
}, { timestamps: true })

// Export Schema
module.exports = mongoose.model('task-collection', taskModel)