const twilio = require("./Config");
const client = require("twilio")(twilio.ACCOUNTSID, twilio.AUTHTOKEN);
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

let number; 
const randomNumber =  (() => {
    return admin.firestore().collection("random").doc("num")
    .set(number)
    .then(() => console.log("Random number generated"))
});

exports.randomNumberFunction = functions.pubsub.schedule("59 12 * * *").onRun(() => {
  console.log("This will be run every day at 1 pm UTC!");
  number = {
      num: String(Math.round(Math.random()*100)+1)
  }
  return randomNumber(number);
});

exports.twilioSendFunction = functions.pubsub.schedule("0 13 * * *").onRun(() => {
  const number = admin.firestore().collection("random").doc("num");

  number.get().then((doc) => {
    let numbers = [twilio.myPhone, twilio.momPhone, twilio.stormyPhone];
    if (doc.exists) {
      console.log("Document data:", doc.data());

      const text = admin.firestore().collection("texts").doc(`${doc.data().num}`);
      text.get().then((d) => {
        numbers.map((number) => {
          client.messages.create({
            to: number, 
            from: twilio.twilioPhone, 
            body: d.data().text
          }).then(message => console.log(message.sid));
        });
      });
    } else {
        console.log("No such document!");
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  return null;
});
