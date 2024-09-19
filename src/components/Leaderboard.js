import React, {useState, useEffect} from 'react';

const Leaderboard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {

        const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
        setScores(storedScores);
    }, []);

    return (
        <div className='leaderboard'>
            <h1>Leaderboard</h1>
            <ul>
                {scores.map((score, index)=> (
                    <li key={index}>{score.name}: {score.points}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;