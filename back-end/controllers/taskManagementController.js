const taskModel = require('../models/taskManagementModel');

const createTask = async (req, res) => {
    try {
        const { task, userRole1, stage } = req.body;
        const docToSave = new taskModel({
            task,
            userRole1,
            stage
        })
        const docToCreate = await docToSave.save();
        res.json({
            message: 'Task Created Successfuly',
            data: true,
            result: docToCreate
        })
    } catch (error) {
        res.json({
            Message: error,
            body: null,
            data: false
        })
    }
}

const getTask = async (req, res) => {
    try {
        const docToGet = await taskModel.find().lean();
        res.json({
            message: 'Data Found Successfuly',
            data: true,
            result: docToGet
        })
    } catch (error) {
        res.json({
            Message: error,
            body: null,
            data: false
        })
    }
}

const updateTaskStatus = async (req, res) => {
    try {
        const body = req.body;
        const docToUpdate = await taskModel.updateOne(
            {_id:body._id,},
            body
            )
        console.log(docToUpdate)
        res.json({
            message: 'Updated Successfuly',
            data: true,
            result: docToUpdate
        })
    } catch (error) {
        res.json({
            message: error.message,
            body: null,
            data: false
        })
    }
}

module.exports = {
    createTask,
    getTask,
    updateTaskStatus
};