
const {StaffRegistration} = require('../model/staff.js');

async function insertStaff(apidata) {
  try {
    const data = new StaffRegistration(apidata);
    const saveData = await data.save();
    console.log('Data created in mongodb' , saveData);
  } catch (err) {
    console.error('Data not created', err);
  }
}

async function readStaff() {
  try {
    const getData = await StaffRegistration.find();
    return getData;
  } catch (err) {
    console.error('Data not read', err);
  }
}

async function updateStaff(apidata){
let filter = {_id: apidata._id};
const updatedStaff= await StaffRegistration.findOneAndUpdate(filter,{$set:apidata},{new:true}
)
if(!updatedStaff){
console.log("not updated",error)
return;
}
console.log('Document updated successfully:', updatedStaff);
}

async function deleteStaff(apidata){
  let filter = {_id:apidata._id};
  const deletedStaff= await StaffRegistration.findOneAndDelete(filter,{},{new:true}
  )
  if(!deletedStaff){
  console.log("not deleted",error)
  return;
  }
  console.log('Document deleted successfully:', deletedStaff);
  }
  




module.exports = {
  insertStaff,
  readStaff,
  updateStaff,
  deleteStaff,
};
