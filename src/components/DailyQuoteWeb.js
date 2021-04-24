import ConfidenceTexts from '../database/ConfidenceTexts';
import React from 'react';

const DailyQuoteWeb = () => {
    return (
        <div>
            <p>This quote will be updated every day at 1 pm UTC.</p>
            <br></br>
            <ConfidenceTexts />
        </div>
    )
};

export default DailyQuoteWeb;
