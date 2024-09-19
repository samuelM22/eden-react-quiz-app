import React, { useState } from 'react';
import Question from './Questions';
import Score from './Score';

const Quiz = ({ questions, onQuizComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerSelection = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            onQuizComplete(score);
        }
    };

    return (
        <div className='quiz'>
            {/* Display the Score */}
            <Score currentScore={score} totalQuestions={questions.length}/>

            {/* Display the current question */}
            <Question
                question={questions[currentQuestionIndex]}
                onAnswerSelection={handleAnswerSelection}
            />
        </div>
    );
};

export default Quiz;
