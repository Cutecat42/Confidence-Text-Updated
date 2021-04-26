import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
            <p>Click {<Link exact to='/all'>here </Link>} if you would like to see a list of all affirmations.</p>
            <p>Please go to your <Link exact to='/profile'>profile</Link> to either request a text a day or verify 
            you should be getting one.</p>
        </div>
    )
};

const Users = (data) => {
    const { user } = useAuth0();
    db.collection('users').doc(`${user.sub}`).set({
        name: `${data.name}`,
        email: `${data.email}`,
        phone: `${data.phone}`,
        payment: `${data.payment}`,
        paid: false,
        created: new Date()
    })
    .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
    });

    return (
        data
    )
};

const UsersCheck = (data) => {
    const { user} = useAuth0();
    const [paid,setPaid] = useState('')

    useEffect(() => {
        const u = db.collection('users').doc(`${user.sub}`);
        u.get().then((doc) => {
            console.log(doc.data().paid)
            if (doc.data().paid === false) {
                setPaid(false)
            }
            else {
                setPaid(true)
            }
        })
    }, [paid])
    return paid
};

export default ConfidenceTexts;
export {
    db,
    Users,
    UsersCheck
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