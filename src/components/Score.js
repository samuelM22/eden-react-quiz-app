import React from 'react'

const Score = ({ currentScore, totalQuestion }) => {
    return (
        <div className='score'>
            <h2>Score: {currentScore} / {totalQuestion}</h2>
        </div>
    );
};

export default Score;