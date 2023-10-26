
const {StaffRegistration} = require('../model/staff.js');

async function insertStaff() {
  try {
    const data = new StaffRegistration({
      firstName:'harish',
      lastName: 'kp',
      age: '30',
      phonenumber: '7299027793',
      emailid: 'kpharish7793@gmail.com'
    });
    
    const saveData = await data.save();
    console.log('Data created', saveData);
  } catch (err) {
    console.error('Data not created', err);
  }
}

async function readStaff() {
  try {
    const getData = await StaffRegistration.find();
    console.log('Data read', getData);
  } catch (err) {
    console.error('Data not read', err);
  }
}

async function updateStaff(){
let filter = {firstName:'harish'};
const updatedStaff= await StaffRegistration.findOneAndUpdate(filter,{age:'28'},{new:true}
)
if(!updatedStaff){
console.log("not updated",error)
return;
}
console.log('Document updated successfully:', updatedStaff);
}

async function deleteStaff(){
  let filter = {firstName:'harish'};
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
