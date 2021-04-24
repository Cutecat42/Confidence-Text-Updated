const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

let number; 
const randomNumber =  (() => {
    return admin.firestore().collection("random").doc("num")
    .set(number)
    .then(() => console.log("Random number generated"))
})

exports.scheduledFunction = functions.pubsub.schedule("0 13 * * *").onRun(() => {
  console.log("This will be run every day at 1 pm UTC!");
  number = {
      num: String(Math.round(Math.random()*100)+1)
  }
  return randomNumber(number);
});


