// src/components/Polls.js
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Polls = () => {
    const [polls, setPolls] = useState([]);
    const [question, setQuestion] = useState('');

    const addPoll = () => {
        if (question.trim()) {
            setPolls([...polls, { question, votes: 0 }]);
            setQuestion('');
        }
    };

    return (
        <div>
            <TextField
                label="Poll Question"
                variant="outlined"
                fullWidth
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={addPoll}>Add Poll</Button>
            <List>
                {polls.map((poll, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={poll.question} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Polls;
