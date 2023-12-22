import React from 'react';
import {Container,Button,Box,TextField} from '@mui/material';

const EmailForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For now, let's just log the entered email
    const email = event.target.email.value;
    console.log('Email submitted:', email);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EmailForm;