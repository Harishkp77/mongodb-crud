const mongoose = require('mongoose');


const staffRegSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: String,
  phonenumber: String,
  emailid: String
});

const StaffRegistration = mongoose.model('staffRegistration', staffRegSchema);

module.exports ={
    StaffRegistration,
}
