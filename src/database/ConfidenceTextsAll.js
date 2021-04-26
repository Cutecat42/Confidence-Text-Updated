import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

const ConfidenceTextsAll = () => {
    const [texts,setTexts] = useState('');

    useEffect(() => {
        async function setText() {
            const textsRef = db.collection('texts');
            const snapshot = await textsRef.get();
            const t = [];
            snapshot.forEach(doc => {
                t.push(doc.data().text) 
            });
            setTexts(t);
        }

        setText();
    }, []);

    if (typeof texts === 'string'){
        return null
    };

    return (
        <div className='container border border-dark'>
            <ul className='list-unstyled mt-2'>
            {texts.map((x,i) => <li key={i}>*{x}</li>)}
            </ul>
        </div>
    )
};

export default ConfidenceTextsAll;