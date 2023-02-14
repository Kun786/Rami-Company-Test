const express = require('express');
const Router = express.Router();


// destruct  controller data
const {
    createTask,
    getTask,
    updateTaskStatus
} = require('../controllers/taskManagementController');

//Accessing Misc File
// accessing the controller
Router.post('/createTask',createTask);
Router.get('/getTask',getTask);
Router.post('/updateTaskStatus',updateTaskStatus);

module.exports = Router;