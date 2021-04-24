const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

let number; 
const randomNumber =  (() => {
    return admin.firestore().collection("random").doc("num")
    .set(number)
    .then(() => console.log("Random number generated"))
})

exports.scheduledFunction = functions.pubsub.schedule("every 5 minutes").onRun(() => {
  console.log("This will be run every 5 minutes!");
  number = {
      num: String(Math.round(Math.random()*2)+1)
  }
  return randomNumber(number);
});


