const taskModel = require('../models/taskManagementModel');

const createTask = async(req, res) => {
    try {
        const {task, userRole1} = req.body;
        const docToSave =  new taskModel({
            task,
            userRole1
        })    
        const docToCreate = await docToSave.save();
        res.json({
            message:'Task Created Successfuly',
            data:true,
            result:docToCreate
        })
    } catch (error) {
        res.json({
            Message: error,
            body: null,
            data: false
        })
    }
}

const getTask = async(req, res) => {
    try {
        const docToGet = await taskModel.find().lean();
        res.json({
            message:'Data Found Successfuly',
            data:true,
            result:docToGet
        })
    } catch (error) {
        res.json({
            Message: error,
            body: null,
            data: false
        })
    }
}

const updateTaskStatus = async(req, res) => {
    try {
        const body = req.body;
        if(body === 'userTwo'){
            const docToUpdate = await taskModel.updateOne({
                _id:'63ea94168a6155523c9874e1',
                userRole2:true,userRole1:false,userRole3:false,userRole4:false
            })
        }else if(body === 'userThree'){
            const docToUpdate = await taskModel.updateOne({
                _id:'63ea94168a6155523c9874e1',
                userRole2:false,userRole1:false,userRole3:true,userRole4:false
            })
        }else if(body === 'userFour'){
            const docToUpdate = await taskModel.updateOne({
                _id:'63ea94168a6155523c9874e1',
                userRole2:false,userRole1:false,userRole3:false,userRole4:true
            })
        }
        
        res.json({
            message:'Updated Successfuly',
            data:true,
            result:'yes'
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