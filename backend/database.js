const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/staff").then(() => {
      console.log("mongodb connected");
    });
  } catch (err) {
    console.log("Not Connected with DB", err);
  }
}

module.exports = {
  connectToDatabase,
};
