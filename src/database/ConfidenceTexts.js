import React, { useState } from 'react';
import firebaseConfig from './Config'
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ConfidenceTexts = () => {

    const [text,setText] = useState("")

    //***testing adding data to database***
    // db.collection("users").doc('test').set({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //     // initialConfig.push(docRef);
    //     // setData(initialConfig)
    //     console.log(initialConfig)
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });

    // db.collection("users").add({
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });

    const docRef = db.collection("texts").doc('2');

    docRef.get().then((doc) => {
        setText(doc.data().text)
    });

    return (
        <div>
            {text}
        </div>
    )
};

export default ConfidenceTexts;
