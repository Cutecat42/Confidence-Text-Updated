import React, { useState, useEffect } from 'react';
import { Link }from 'react-router-dom';
import firebaseConfig from './Config'
import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ConfidenceTexts = () => {
    const [text,setText] = useState('')
    const [num,setNum] = useState(0)

    useEffect(() => {
        const number = db.collection('random').doc('num');
        number.get().then((doc) => {
            setNum(doc.data().num)
        });
    }, [num]);

    useEffect(() => {
        const docRef = db.collection('texts').doc(`${Number(num)}`);
        docRef.get().then((doc) => {
            if (doc.data() !== undefined) {
                setText(doc.data().text)
            }
        });
    }, [num])

    return (
        <div>
            {text}
            <br></br>
            <br></br>
            <p>Click {<Link exact to='/all' className=''>here </Link>} if you would like to see a list of all affirmations.</p>
        </div>
    )
};

export default ConfidenceTexts;
export {
    db
};


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

    // let rand = Math.floor(Math.random() * 2) + 1;

    // const number = db.collection("random").doc('num');

    // number.get().then((doc) => {
    //     setNum(doc.data().num)
    // });

    // const docRef = db.collection("texts").doc(num);

    // docRef.get().then((doc) => {
    //     setText(doc.data().text)
    // });