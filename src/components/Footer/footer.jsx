// import Box from '../atoms/box'
// import Typography from '../atoms/typography'
import React from 'react'
import { Divider,Typography,Box } from '@mui/material'
import EmailForm from '../Email/EmailForm'

const Footer = () => {
  return (
    <Box
      sx={{
        border: '1px solid red',
        width: "100%",
        bgcolor: "#dde9ff",
        color: "#2D2D2Dck",
        clipPath: "ellipse(99% 100% at center bottom)",
      }}
    >
      <Box className={'flex justify-center'} >
        <Link href={"/"} >
          <Image src="/logo-01.png" alt="Brand Logo" width={210} height={80} />
        </Link>
      </Box>
      <Divider className={'m-auto'} sx={{ color: 'gray', width: '90%', }} />
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
              fontSize: { xs: "20px", sm: "25px" },
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
                fontSize: { xs: "15px", sm: "18px" },
                textAlign: { xs: "center", md: "start" },
                mt: { xs: "0px", md: "10px" },
                lineHeight: "120%",
                // color: "#fff",
              }}
            >
             15A, Nand Prem, behing Parle Book Depot, Nehru Road, Opp. HDFC bank, Vile Parle East.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "16px", md: "18px" },
                textAlign: { xs: "center", md: "start" },
                mt: { xs: "0px", sm: "8px" },
              }}
            >
              +91 9773499614
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "16px", md: "18px" },
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
                  width: "50px", // Set the width of the box
                  height: "50px", // Set the height of the box
                }}
              >
                <Image
                  src={'/facebooklogo.png'}
                  alt="Brand Logo"
                  width={150}
                  height={90}
                  layout="responsive" // Make the image responsive
                  objectFit="contain" // Choose the object-fit property to control how the image fits into the box
                />
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
                  width: "50px",
                  height: "50px",
                }}
              >
                <Image
                  src={'/whatsapplogo.png'}
                  alt="Brand Logo"
                  width={150}
                  height={90}
                  layout="responsive" // Make the image responsive
                  objectFit="contain" // Choose the object-fit property to control how the image fits into the box
                />
              </Box>
              <Box
                sx={{
                  padding: "12px 13px 16px 13px",
                  background: "#FFF",
                  borderRadius: "50%",
                  boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Box sx={{ width: "15px", height: "15px" }}>
                  {/* <img style={{ ...imgsize }} src={linkdin} alt="preview" /> */}
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "12px 13px 16px 13px",
                  background: "#FFF",
                  borderRadius: "50%",
                  boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Box sx={{ width: "15px", height: "15px" }}>
                  {/* <img style={{ ...imgsize }} src={twitter} alt="preview" /> */}
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
        {/* second columns start from here. */}
        
        {/* ----------- third column start from here. */}
        
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
              fontSize: { xs: "20px", sm: "25px" },
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
              fontSize: { xs: "15px", sm: "18px" },
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
              fontSize: { xs: "15px", sm: "18px" },
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
              fontSize: { xs: "15px", md: "18px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Privacy Policy
          </Typography>


          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "15px", md: "18px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Terms & Condition
          </Typography>
          {/* </Box> */}
        </Box>
        {/* fourth column start from here */}
        <Box
          sx={{
            width: {
              xs: "70%",
              md: "20%",
              margin: "auto",

              display: "flex",
              justifyContent: "end",
            },
          }}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2057461745094!2d72.8422987734602!3d19.098627851265206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b14e318aa3%3A0xa42da1932d336ae0!2sVile%20Parle%20Station%20(E)!5e0!3m2!1sen!2sin!4v1702794165334!5m2!1sen!2sin" width="800" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        {/* fifth columns */}
        <Box>
          <EmailForm/>
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
  )
}

export default Footer