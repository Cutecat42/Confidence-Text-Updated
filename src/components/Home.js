import { Link }from 'react-router-dom';
import React from 'react';

const Home= () => {
    return (
        <div className='container mt-5 border border-dark'>
            <br></br>
            <h5><Link exact to='/login'>Login</Link> to get a daily affirmation!</h5>
            <br></br>
        <p>
            Affirmations are positive statements that can help you to challenge and overcome self-sabotaging  and negative thoughts. 
            When you repeat them often, and believe in them, you can start to make positive changes.
        </p>
        <p>
            You might consider affirmations to be unrealistic "wishful thinking." But try looking at positive affirmations this 
            way: many of us do repetitive exercises to improve our physical health, and affirmations are like exercises for our 
            mind and outlook. These positive mental repetitions can reprogram our thinking patterns so that, over time, we begin 
            think – and act – differently.
        </p>
        <br></br>
        <h6>
            See full article at <a href={"https://www.mindtools.com/pages/article/affirmations.htm"} 
            target="/blank">MindTools</a>.
        </h6>
        <br></br>
    </div>
    )
};

export default Home;