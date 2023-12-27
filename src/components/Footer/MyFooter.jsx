import { Box, Divider, TextField, Typography,Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { brandLogo, facebookLogo, whatsappLogo } from '../../utils'
import emailjs from '@emailjs/browser';

const MyFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
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
        // You can add additional logic here if needed
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle errors or show a message to the user
      });
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
        <Divider sx={{ background: "gray", width: "95%", m: "auto", height: "0.3px" }} />
        <Box
          sx={{
            // border:'1px solid blue',
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "320px",
            gap: "15px",
            alignItems: "center",
            margin: "auto",
            width: { xs: "95%", md: "97%" },

            // p: { xs: "10px 0px", sm: "30px 0px" },
          }}
        >

          {/* first section start from here. */}
          <Box
            // sx={{
            //   width: { xs: "100%", md: "22%" },
            //   // p: { xs: 0, md: 4 },
            //   boxSizing: "border-box",
            //   m: "auto",
            //   ml: { xs: "0px", md: "10px" },
            //   display: "flex",
            //   flexDirection: "column",
            //   gap: "6px",
            //   mt: { xs: "20px", md: "42px" },
            // }}
            sx={{
              // border:'1px solid blue',
              width: { xs: "100%", md: "22%" },
              height: '90%',
              // boxSizing: "border-box",
              // m: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "14px", sm: "20px" },
                textAlign: { xs: "center", md: "start" },
                fontWeight: 500,
                // color: "#fff",
                mt: "30px"
              }}
            >
              Contact us
            </Typography>
            <Box sx={{ maxHeight: { xs: "10vh", md: "15vh" } }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "15px", sm: "16px" },
                  textAlign: { xs: "center", md: "start" },
                  mt: { xs: "0px", md: "10px" },
                  lineHeight: "120%",
                  // color: "#fff",
                }}
              >
                Bulevar Zorana Dindic 125 Belgrade Serbia
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "15px", sm: "16px" },
                  textAlign: { xs: "center", md: "start" },
                  mt: { xs: "0px", sm: "8px" },
                }}
              >
                +908 89097 890
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
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
                  // height: "48px",
                  // m: "auto",
                  mt: { xs: "10px", md: "12%" },
                  display: "flex",
                  // gap: "20px",
                  // border:"solid red ",
                  // mb:"30px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    padding: "10px 8px 10px 8px",
                    background: "#FFF",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    justifyContent: "center", // Center the content horizontally
                    alignItems: "center", // Center the content vertically
                    width: "30px", // Set the width of the box
                    height: "30px", // Set the height of the box
                  }}
                >
                  <img src={facebookLogo} style={{ width: "100px", height: "40px" }} alt="" />
                </Box>
                <Box
                  sx={{
                    padding: "10px 8px 10px 8px",
                    background: "#FFF",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <img src={whatsappLogo} style={{ width: "100px", height: "40px" }} alt="" />
                </Box>
                <Box
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
                </Box>
                {/* <Box
                sx={{
                  padding: "12px 13px 16px 13px",
                  background: "#FFF",
                  borderRadius: "50%",
                  boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Box sx={{ width: "15px", height: "15px" }}>
                </Box>
              </Box> */}
              </Box>
            </Box>

          </Box>
          {/* second columns start from here. */}
          <Box
            sx={{
              // border:'1px solid blue',
              width: { xs: "100%", md: "12%" },
              height: '90%',
              // boxSizing: "border-box",
              // m: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "14px", sm: "20px" },
                // textAlign: { xs: "center", md: "start" },
                fontWeight: 500,
                mt: "30px",
                // color: "#fff",
                // border:"solid red",
                // ml: { xs: "", md: "-30px" },
              }}
            >
              Quick links
            </Typography>
            {/* ------- */}
            {/* <Box
            sx={{
              maxHeight: { xs: "10vh", md: "16vh" },
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              // border:"solid red"
            }}
          > */}
            {/* <Link to={"/about"} style={{textDecoration:"none",}}> */}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: "5px", md: "4px" },
                // color:"#ffff"
              }}
            >
              About us
            </Typography>
            {/* </Link> */}
            {/* <Link to={"/contactus"} style={{textDecoration:"none",}}> */}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
                // color:"#fff"
              }}
            >
              Contact us
            </Typography>
            {/* </Link> */}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Privacy Policy
            </Typography>


            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "16px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Terms & Condition
            </Typography>
            {/* </Box> */}
          </Box>
          {/* ----------- third column start from here. */}
          <Box
            sx={{
              width: { xs: '100%', md: '22%' },
              boxSizing: 'border-box',
              m: 'auto',
              ml: { xs: '0px', md: '10px' },
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              mt: { xs: '20px', md: '42px' },
            }}
          >
            <form 
            ref={form}
            onSubmit={handleSubmit}
            >
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitDisabled}
                sx={{ mt: '12px' }}
              >
                Submit
              </Button>
            </form>
          </Box>
          {/* fourth column start from here */}
          <Box
            sx={{
              width: {
                xs: "70%",
                md: "35%",
                margin: "auto",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
                display: "flex",
                justifyContent: "end",
              },
            }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2057461745094!2d72.8422987734602!3d19.098627851265206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b14e318aa3%3A0xa42da1932d336ae0!2sVile%20Parle%20Station%20(E)!5e0!3m2!1sen!2sin!4v1702794165334!5m2!1sen!2sin" width="800" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Box>
        {/* bottom footer which have copyright content. */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignItems: 'center',
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
            Copyright © 2023  Physics Private Tutorials All rights Rcerved
          </Typography>
        </Box>
      </Box>


    </>
  )
}

export default MyFooter