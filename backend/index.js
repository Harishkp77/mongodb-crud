const express = require("express");
const {connectToDatabase} = require('./database')
const app = express();
const staffController = require('./controller/staffController.js');


connectToDatabase()
.then(() => {
    console.log('MongoDB connected')
    //staffController.insertStaff();
    //staffController.readStaff();
    //staffController.updateStaff();
    staffController.deleteStaff();

}
).catch(err=>{
    console.log(err)
});
    