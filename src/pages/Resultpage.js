import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const ResultPage = ({ location}) => {
    const {score, totalQuestions} = location.state;

    useEffect(() => {
        const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
        const newScore = {name: 'Player', points: score};
        localStorage.setItem('scores', JSON.stringify([...storedScores, newScore]));
    }, [score]);

    return (
        <div className='result-page'>
            <h1>Your Score: {score} / {totalQuestions}</h1>
            <Link to='/Leaderboard'>
                <button>View Leaderboard</button>
            </Link>
            <Link to='/'>
                <button>Try Again</button>
            </Link>
        </div>
    );
};

export default ResultPage;