import React, { useState, useEffect } from 'react';
import { Paper, Typography, Modal, Backdrop, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './StatCard.css';

const StatCard = ({ title, value, description }) => {
  const [open, setOpen] = useState(false);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Function to generate random data for demonstration
    const generateRandomData = () => {
      const names = [
        'Aarav', 'Vivaan', 'Advik', 'Vihaan', 'Arjun', 'Reyansh', 'Mohammed', 'Ayaan', 'Krishna', 'Ishaan',
        'Saanvi', 'Diya', 'Aadhya', 'Kiara', 'Ananya', 'Myra', 'Kavya', 'Pari', 'Saumya', 'Anika'
      ];

      const data = [];
      for (let i = 0; i < 50; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const status = Math.random() < 0.7 ? 'P' : 'A';
        data.push({ id: i + 1, name, status });
      }

      return data;
    };

    // Set random data to state on component mount
    setVolunteers(generateRandomData());
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper className="stat-card" onClick={handleOpen}>
        <Typography variant="h6" className="stat-card-title">{title}</Typography>
        <Typography variant="h4" className="stat-card-value">{value}</Typography>
        <Typography variant="body2" className="stat-card-description">{description}</Typography>
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
        className="fullscreen-modal"
      >
        <div className="modal-paper">
          <Typography variant="h6" id="transition-modal-title" className="modal-title">
            {title}
          </Typography>
          <TableContainer className="table-container">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>S/L</TableCell>
                  <TableCell>Volunteer Name</TableCell>
                  <TableCell>Attendance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {volunteers.map((volunteer) => (
                  <TableRow key={volunteer.id}>
                    <TableCell>{volunteer.id}</TableCell>
                    <TableCell>{volunteer.name}</TableCell>
                    <TableCell>{volunteer.status === 'P' ? 'Present' : 'Absent'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" onClick={handleClose} className="close-button">Close</Button>
        </div>
      </Modal>
    </>
  );
};

export default StatCard;
