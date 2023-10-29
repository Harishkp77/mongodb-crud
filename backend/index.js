const express = require("express");
const { connectToDatabase } = require('./database')
const app = express();
const staffController = require('./controller/staffController.js');
const bodyParser = require("body-parser");
const port = 3000;
const cors = require("cors"); 

app.use(bodyParser.json());
app.use(cors()); 

connectToDatabase()
    .then(() => {
        console.log('MongoDB connected')
    }
    ).catch(err => {
        console.log(err)
    });


app.post('/api/staff', async (req, res) => {
    try {
        const data = req.body;
        
        await staffController.insertStaff(data);
        res.json({ message: "data received sucessfully" })
    } catch (err) {
        res.status(500).json({ message: 'Error reading data' });
    }


})

app.get('/read/staff', async (req, res)=>{
    try{
        const getdata= await staffController.readStaff();
        res.json(getdata);
    }catch (err) {
        res.status(500).json({ message: 'Error saving data' });
    
    }
});

app.post('/update/staff', async (req, res) => {
    try {
        const data = req.body;
        
        await staffController.updateStaff(data);
        res.json({ message: "data received sucessfully" })
    } catch (err) {
        res.status(500).json({ message: 'Error reading data' });
    }


}
)


app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});