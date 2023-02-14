//Block Start Dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
require('./configuration/databaseConfiguration');
//Block End Dependencies


//Block Start Initialize the app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
const PORT = 5665;
//Block End Intialize the app


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other rou
});
//End Block Setting the Header for your Application

//Start Block Set Static Folders (Absolute)
app.use(express.static(path.join(__dirname,'/frontend')));
//Start Block Set Static Folders (Absolute)


//Start Block Load Routes

//LoadingRoutes in Variable
const _taskManagementRoutes = require('./routes/taskManagementRoutes');
//LoadingRoutes in Variable

//Using Routes
app.use('/taskManagement',_taskManagementRoutes);
//Using Routes

//End Block Load Routes


//Serving Front End From Express Server
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/front-end/index.html'));
    console.log(__dirname);
});
// End Block Checking Routes

//Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});
//End Block Checking Routes As express not found Url not Founded we need to do it explicitly 

//Start Block For Listening Your App On Defined Port

app.listen(process.env.PORT, () => {
    console.log(`You Application has Launched from the Port 🚀 🚀 ${PORT}`);
})


//End Block For Listening Your App On Defined Port