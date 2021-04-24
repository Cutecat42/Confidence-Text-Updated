import ConfidenceTextsAll from '../database/ConfidenceTextsAll';
import { Link } from 'react-router-dom';
import React from 'react';

const AllQuotes = () => {

    return (
        <div>
            <br></br>
            <h4>Be nice to yourself and say these every day!</h4>
            <br></br>
            <ConfidenceTextsAll />
            <br></br>
            <Link className='btn btn-secondary' role='button' to='/daily'> 
                Go back
            </Link>
            <br></br>
            <br></br>
        </div>
    );
};

export default AllQuotes;
