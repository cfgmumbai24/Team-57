// src/components/QuestionList.js
import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, onLike, onReply }) => {
    const sortedQuestions = {
        popular: [...questions].sort((a, b) => b.likes - a.likes),
        recent: [...questions].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
    };

    return (
        <div>
            <h2>Popular</h2>
            {sortedQuestions.popular.map((question, index) => (
                <Question key={index} question={question} onLike={onLike} onReply={onReply} />
            ))}
            <h2>Recent</h2>
            {sortedQuestions.recent.map((question, index) => (
                <Question key={index} question={question} onLike={onLike} onReply={onReply} />
            ))}
        </div>
    );
};

export default QuestionList;
