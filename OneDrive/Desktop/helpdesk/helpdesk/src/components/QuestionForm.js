// src/components/QuestionForm.js
import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';

const QuestionForm = ({ onAddQuestion }) => {
    const [question, setQuestion] = useState('');
    const [anonymous, setAnonymous] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            onAddQuestion({ text: question, anonymous, likes: 0, replies: [], timestamp: new Date() });
            setQuestion('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
            <TextField
                label="Type your question"
                variant="outlined"
                fullWidth
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <FormControlLabel
                control={<Checkbox checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />}
                label="Ask anonymously"
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Box>
    );
};

export default QuestionForm;
