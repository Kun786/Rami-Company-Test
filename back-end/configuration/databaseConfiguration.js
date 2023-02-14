const Package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://humanoidcrm:human-robot@cluster0.pl9rhba.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (error,connection) => {
    if (!error) {
        console.log(`\nMogoDb Connected Successfuly at MongoAtlas with Database Name HumanoidCrm\n`);
        console.log("Your App Has the Following Dependicies\n");
        for (dependencies in Package.dependencies) {
            console.log(dependencies);
        }
    }
    else { console.log('Error: Not Connected to the MongoDb' + error) }
});