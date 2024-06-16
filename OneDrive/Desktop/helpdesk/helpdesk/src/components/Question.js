// src/components/Question.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Box, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Question.css';

const Question = ({ question, onLike, onReply }) => {
    const [reply, setReply] = useState('');

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (reply.trim()) {
            onReply(question, reply);
            setReply('');
        }
    };

    return (
        <Card className="question-card">
            <CardContent>
                <Box className="question-header">
                    <Typography variant="h6">{question.text}</Typography>
                    <IconButton 
                        className="like-button" 
                        onClick={() => onLike(question)}
                        color={question.likes > 0 ? "primary" : "default"}
                    >
                        <ThumbUpIcon />
                    </IconButton>
                </Box>
                <Typography variant="caption">{question.anonymous ? 'Anonymous' : 'User'}</Typography>
                <Typography variant="body2">{question.likes} Likes</Typography>
                <form onSubmit={handleReplySubmit}>
                    <TextField
                        label="Type your reply"
                        variant="outlined"
                        fullWidth
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary">Reply</Button>
                </form>
                {question.replies.map((reply, index) => (
                    <Box key={index} sx={{ mt: 1, ml: 2 }}>
                        <Typography variant="body2">{reply}</Typography>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};

export default Question;
