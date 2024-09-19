import React from 'react';
import Quiz from '../components/Quiz';
import {useNavigate} from 'react-router-dom'


const QuizPage = () => {
    const navigate = useNavigate();
    const questions = [

        {
            text: "What is the capital of France",
            options: [
                {text: "Paris", isCorrect: true},
                {text: "London", isCorrect: false},
                {text: "Berlin", isCorrect: false},
                {text: "Madrid", isCorrect: false},
            ],
        },

        {
            text: "What is the largest planet in our solar system?",
            options: [
                {text: "Earth", isCorrect: false},
                {text: "Jupiter", isCorrect: true},
                {text: "Mars", isCorrect: false},
                {text: "Venus", isCorrect: false},
            ],
        },
    ];

    const handleQuizComplete = (score) => {
        navigate.push({
            pathname: '/result',
            state: {score, totalQuestions: questions.length},
        });
    };

    return (
        <div className='quiz-page'>
            <Quiz questions={questions} onQuizComplete={handleQuizComplete} />
        </div>
    );
};


export default QuizPage;