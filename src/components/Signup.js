import { Users } from '../database/ConfidenceTexts';
import SignupForm from './SignupForm';
import React, { useState } from 'react';

const Signup = () => {
    const [data,setData] = useState('');

    if (data) {
        Users(data);

        return (
            <>
            <br></br>
            <div className='border border-dark' style={{width: '30vw', marginLeft: '35vw', marginTop: '10px',padding: '5px'}}>
                You have successfully submited your request. Please send the $25 over to $KittyCat4242 through CashApp
                within the next 24 hours, otherwise you will need to submit your request again. Once I have verified
                you have sent the money, I will add your phone number to the list and email you letting you know! If 
                you have any problems, please email me at musical_kitty@hotmail.com.
                <p>If you don't receive an email from me after 1 business day, please email me to make sure I received
                    your request.
                </p>
            </div>
            </>
        )
    };

    return (
        <div>
                <div className='border border-dark' style={{width: '30vw', marginLeft: '35vw', marginTop: '10px',padding: '5px'}}>
                    <p>Would you like to receive the daily affirmation to your phone number instad of having to login? It's super easy
                        to sign up! It costs me about $2 a month to send a text to myself everyday, so I am asking that you "donate"
                        $25 (or more if you really want) to get a text a day for the next 12 months. I currently can only take CashApp - however, please email
                        me at musical_kitty@hotmail.com if you would like to work something out!
                    </p>
                    <p>Please note, this is not a contract of service. I have created this application to automatically send a text out every day
                        to specified phone numbers. Even though it's automatic, it's possible there might be a problem as technology
                        isn't perfect. I will do my best to resolve any problems you have as soon as I can. Please see my email above if
                        you need anything or just want to reach out and say hi!
                    </p>
                    <hr></hr>
                    <SignupForm setData={setData}/>
                </div>
        </div>
    )
};

export default Signup;
