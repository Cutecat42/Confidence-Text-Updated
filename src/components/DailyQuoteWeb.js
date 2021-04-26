import ConfidenceTexts from '../database/ConfidenceTexts';
import React from 'react';

const DailyQuoteWeb = () => {
    return (
        <div>
            <br></br>
            <h6>This quote will be updated every day at 1 pm UTC.</h6>
            <br></br>
            <br></br>
            <ConfidenceTexts />
        </div>
    )
};

export default DailyQuoteWeb;
