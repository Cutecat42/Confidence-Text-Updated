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
            <div class="form-group">
                <label htmlFor="name">What is your name? </label> &nbsp;
                <input type="text" onChange={handleChange} id="name" name="name" value={formData.name} required/>

                <label htmlFor="email">What is your email? </label> &nbsp;
                <input type="text" onChange={handleChange} id="email" name="email" value={formData.email} required/>
                
                <label htmlFor="phone">What is the phone number you'll like to receieve a text on every day? </label>
                <input type="text" onChange={handleChange} id="phone" name="phone" value={formData.phone} required/>

                <label htmlFor="payment">What is the CashApp ID that you'll be using to pay with? </label>
                <input type="text" onChange={handleChange} id="payment" name="payment" value={formData.payment} className='mb-2' required/>
                <br></br>
                <button className='btn btn-secondary'>Request a text a day!</button>
            </div>
        </form>
    )
};

export default SignupForm;
