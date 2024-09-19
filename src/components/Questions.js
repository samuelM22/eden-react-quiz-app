import React from 'react';

const Question = ({ question, onAnswerSelection }) => {
    return (
        <div className='question'>
            <h2>{question.text}</h2>
            <div className='options'>
                {question.options.map((option, index) =>(
                    <button
                        key={index}
                        onClick={() => onAnswerSelection(option.isCorrect)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;