import ConfidenceTextsAll from '../database/ConfidenceTextsAll';
import  Button from 'react-bootstrap/Button';
import React from 'react';

const AllQuotes = () => {
    return (
        <div>
            <br></br>
            <p>Be nice to yourself and say these every day!</p>
            <ConfidenceTextsAll />
            <br></br>
            <Button className='btn btn-secondary'>Go back</Button>
            <br></br>
            <br></br>
        </div>
    );
};

export default AllQuotes;
