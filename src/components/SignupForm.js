import React, { useState, useEffect } from 'react';

const SignupForm = ({setData}) => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        payment: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData=>({
            ...fData,
            [name]: value         
        }))
    };

    function setDataForParent(e) {
        e.preventDefault();
        setData(formData);
    };
    
    return (
        <form onSubmit={setDataForParent}>

        <label htmlFor="name">What is your name?</label>
        <input type="text" onChange={handleChange} id="name" name="name" value={formData.name}/>

        <label htmlFor="email">What is your email?</label>
        <input type="text" onChange={handleChange} id="email" name="email" value={formData.email}/>
        
        <label htmlFor="phone">What is the phone number you'll like to receieve a text on every day?</label>
        <input type="text" onChange={handleChange} id="phone" name="phone" value={formData.phone}/>

        <label htmlFor="payment">What is the CashApp ID that you'll be using to pay with?</label>
        <input type="text" onChange={handleChange} id="payment" name="payment" value={formData.payment}/>

        <button>Request a text a day!</button>
        </form>
    )
};

export default SignupForm;
