// src/App.js
import React, { useState } from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';
import Polls from './components/Polls';
import './App.css';

const App = () => {
    const [questions, setQuestions] = useState([
        { text: 'What initiatives are currently being taken by the Egle Foundation to support sustainable development?', anonymous: true, likes: 3, replies: [], timestamp: '2023-01-01T00:00:00Z' },
        { text: 'How can volunteers get involved with Egle Foundation’s projects?', anonymous: true, likes: 2, replies: [], timestamp: '2023-02-01T00:00:00Z' },
        { text: 'What are the major challenges faced by the Egle Foundation in promoting environmental conservation?', anonymous: true, likes: 1, replies: [], timestamp: '2023-03-01T00:00:00Z' },
    ]);
    const [tab, setTab] = useState(0);

    const handleAddQuestion = (question) => {
        setQuestions([...questions, question]);
    };

    const handleLike = (likedQuestion) => {
        setQuestions(questions.map(q => q === likedQuestion ? { ...q, likes: q.likes + 1 } : q));
    };

    const handleReply = (repliedQuestion, reply) => {
        setQuestions(questions.map(q => q === repliedQuestion ? { ...q, replies: [...q.replies, reply] } : q));
    };

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container>
            <Tabs value={tab} onChange={handleTabChange}>
                <Tab label="Q&A" />
                <Tab label="Polls" />
            </Tabs>
            <Box sx={{ padding: 3 }}>
                {tab === 0 && (
                    <>
                        <QuestionForm onAddQuestion={handleAddQuestion} />
                        <QuestionList questions={questions} onLike={handleLike} onReply={handleReply} />
                    </>
                )}
                {tab === 1 && <Polls />}
            </Box>
        </Container>
    );
};

export default App;
