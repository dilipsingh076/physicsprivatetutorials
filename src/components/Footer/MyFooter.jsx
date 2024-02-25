import { Box, Divider, TextField, Typography,Button, Snackbar, Alert } from '@mui/material'
import React, { useRef, useState } from 'react'
import { brandLogo, facebookLogo, whatsappLogo } from '../../utils'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const MyFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const form = useRef();
  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsSubmitDisabled(!inputValue.trim()); // Enable submit if the email field is not empty
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can customize the email service and template ID based on your Email.js setup
    const emailService = 'service_z5bonw9';
    const templateId = 'template_xvmr7wk';

    // Send email using Email.js
    emailjs.send(emailService, templateId, { from_name: email },'tISMwdyPc9SBQJVoU')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setEmail('')
        setOpen(true)
        // You can add additional logic here if needed
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle errors or show a message to the user
      });
  };

  const openWhatsApp = () => {
    const phoneNumber = '9773499614';
    const message = 'Hello, I want to chat with you!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: "20px",
          width: "100%",
          bgcolor: "#dde9ff",
          boxSizing: "border-box",
          color: "#2D2D2Dck",
          clipPath: "ellipse(99% 100% at center bottom)",
          mt: "5vh",
        }}
      >
        <Box
          className={'flex justify-center'}
          sx={{
            width: "100%",
            mt: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={brandLogo} style={{ width: "150px", height: "50px", marginBottom: "20px" }} alt="" />
        </Box>
        <Divider sx={{ background: "rgba(6, 57, 149, 1)", width: "95%", m: "auto", height: "0.1px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "auto",
            gap: "15px",
            alignItems: "center",
            margin: "auto",
            width: { xs: "95%", md: "97%" },
            p: { xs: "10px 0px", sm: "30px 0px" },
          }}
        >

          {/* first section start from here. */}
          <Box
            sx={{
              width: { xs: "100%", md: "22%" },
              boxSizing: "border-box",
              m: "auto",
              ml: { xs: "0px", md: "10px" },
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              mt: { xs: "20px", md: "42px" },
              color: "rgba(6, 57, 149, 1)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px" },
                textAlign: { xs: "center", md: "start" },
                fontWeight: 500,
                mt: { xs: "0px", md: "10px" },
              }}
            >
              Contact us
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  textAlign: { xs: "center", md: "start" },
                  mt: { xs: "0px", md: "10px" },
                  lineHeight: "120%",
                }}
              >
                15A Nand Prem, behind Parle Book Depot, Nehru Road, Opp. HDFC
                bank, Vile Parle EAST.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "16px" },
                  textAlign: { xs: "center", md: "start" },
                  mt: { xs: "0px", sm: "8px" },
                }}
              >
                +91 97734 99614
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "16px" },
                  textAlign: { xs: "center", md: "start" },
                  mt: { xs: "0px", md: "7px" },
                  // color: "#fff",
                }}
              >
                physicsprivatetuotrials.com
              </Typography>
              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  mt: { xs: "10px", md: "12%" },
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "start" },
                }}
              >
                <Box
                  sx={{
                    padding: "10px 8px 10px 8px",
                    background: "#FFF",
                    borderRadius: "50%",
               
                    display: "flex",
                    justifyContent: "center", // Center the content horizontally
                    alignItems: "center", // Center the content vertically
                    width: "20px", // Set the width of the box
                    height: "17px", // Set the height of the box
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={facebookLogo}
                    style={{ width: "100px", height: "40px" }}
                    alt="facebook logo"
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px 8px 10px 8px",
                    background: "#FFF",
                    borderRadius: "50%",
                  
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20px",
                    height: "17px",
                    cursor: "pointer",
                  }}
                  onClick={openWhatsApp}
                >
                  <img
                    src={whatsappLogo}
                    style={{ width: "100px", height: "40px" }}
                    alt="whatsapp logo"
                  />
                </Box>
                {/* <Box
                  sx={{
                    padding: "12px 13px 16px 13px",
                    background: "#FFF",
                    borderRadius: "50%",
                    boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Box sx={{
                    padding: "12px 13px 16px 13px",
                    background: "#FFF",
                    borderRadius: "50%",
                    boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                  }}>
                    <img src={whatsappLogo} style={{ width: "100px", height: "40px" }} alt="" />
                  </Box>
                </Box> */}
              </Box>
            </Box>
          </Box>

          {/* second columns start from here. */}
          <Box
            sx={{
              width: { xs: "100%", md: "22%" },
              boxSizing: "border-box",
              m: "auto",
              ml: { xs: "0px", md: "10px" },
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              gap:{xs:"0px",md: "6px"},
              justifyContent: "space-between",
              mt: { xs: "20px", md: "28px" },
              color: "rgba(6, 57, 149, 1)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                textAlign: { xs: "center", md: "start" },
                fontWeight: 500,
                mt: { xs: "0px", md: "30px" },
                // width: "fit-content",
              }}
            >
              Quick links
            </Typography>
            {/* ------- */}
            <Typography
              component={Link}
              to="/"
              sx={{
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: "0px", md: "10px" },
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(6, 57, 149, 1)",
                // width: "fit-content",
              }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(6, 57, 149, 1)",
                // width: "fit-content",
              }}
            >
              About us
            </Typography>
            <Typography
              component={Link}
              to="/contact"
              sx={{
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(6, 57, 149, 1)",
                // width: "fit-content",
              }}
            >
              Contact us
            </Typography>
            <Typography
              component={Link}
              to="/courses"
              sx={{
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(6, 57, 149, 1)",
                // width: "fit-content",
              }}
            >
              Courses
            </Typography>
          </Box>
          {/* ----------- third column start from here. */}
          <Box
            sx={{
              width: { xs: "100%", md: "22%" },
              boxSizing: "border-box",
              m: "auto",
              ml: { xs: "0px", md: "10px" },
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              mt: { xs: "0px", md: "52px" },
            }}
          >
            {/* <Typography variant="h6" sx={{ textAlign: "center", color: "#f55a00", mb: "0.5vh" }}>
              Stay up to date with the latest courses
            </Typography> */}
            <Box
              sx={{
                boxSizing: "border-box",
                ml: { xs: "0px", md: "10px" },
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                mt: { xs: "20px", md: "42px" },
              }}
            >
              <form ref={form} onSubmit={handleSubmit}>
                <TextField
                   placeholder="Email"
                  // variant="outlined"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                  required
                  sx={{border:"none"}}
                />
                <Button
                  type="submit"
                 
                  disabled={isSubmitDisabled}
                  sx={{ mt: "12px" , background: "#fff",

                  transition: "background 0.3s , color 0.3s ",
                  "&:hover": {
                    background: "#063995",
                    color: "#FFF",
                  },
  
                  textTransform: "capitalize",
                  boxShadow: "0px 10px 60px 0px rgba(38, 45, 118, 0.08)",
                  padding: "5px 20px",}}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
          {/* fourth column start from here */}
          <Box
            sx={{
              width: {
                xs: "90%",
                md: "35%",
                margin: "auto",
                display: "flex",
                justifyContent: "end",
                 
              },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2057461745094!2d72.8422987734602!3d19.098627851265206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b14e318aa3%3A0xa42da1932d336ae0!2sVile%20Parle%20Station%20(E)!5e0!3m2!1sen!2sin!4v1702794165334!5m2!1sen!2sin"
              width="800"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 'none', boxShadow: 'none' }}>
            </iframe>
          </Box>
        </Box>
        {/* bottom footer which have copyright content. */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: '#dd5c7a',
            width: '100%'
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontfamily: "Poppins",
              color: "#fff",
            }}
          >
            Copyright © 2023 Physics Private Tutorials All rights Rcerved
          </Typography>
        </Box>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Email sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default MyFooter;
