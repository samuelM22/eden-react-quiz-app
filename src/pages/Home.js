import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to the Eden Cloud Quiz App</h1>
            <Link to="/quiz">
                <button>Start Quiz</button>
            </Link>
        </div>
    );
};

export default Home;
