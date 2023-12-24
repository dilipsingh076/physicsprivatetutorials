import { Box, Typography } from "@mui/material";
import React from "react";
import Contactform from "../components/ContactCompo/ContactForm";
import { bigellise } from "../utils";

const Contact = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: "#063995",
            fontSize: "40px",
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          {" "}
          Contact Us
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "500", mb: "10px" }}>
          Any question or remarks? Just write us a message!
        </Typography>
      </Box>

      <Box
        sx={{
          boxShadow: "0px 0px 60px 30px rgba(0, 0, 0, 0.03)",
          padding: "10px",
          borderRadius: "10px",
          width:{sm: "60%",md:"80%"},
          m: "auto",
          height: "75vh",
          display: "flex",
          // justifyContent: "space-between"
          mb: "50px",
        }}
      >
        <Box
          sx={{
            background: "#063995",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            color: "#fff",
            width: "40%",
            height: "100%",
            padding: "40px",
            position: "relative",
            borderRadius: "10px",
            boxSizing: "border-box",

            gap: "30px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "28px" }}>
              Contact Information
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              Say something to start a live chat!
            </Typography>
          </Box>
          <Box
            sx={{
              height: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}> +1012 3456 789</Typography>
            <Typography sx={{ fontSize: "14px" }}> demo@gmail.com</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              15A Nand Prem, behind Parle Book Depot, Nehru Road, Opp. HDFC
              bank, Vile Parle East.
            </Typography>
          </Box>

          <Box sx={{ position: "absolute", bottom: "50px", right: "50px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 138 138"
              fill="none"
            >
              <circle
                cx="69"
                cy="69"
                r="69"
                fill="#FFF9F9"
                fill-opacity="0.13"
              />
            </svg>
          </Box>
          <Box sx={{ position: "absolute", bottom: "-3px", right: "0" }}>
            <img
              src={bigellise}
              alt="Girl in a jacket"
              width="140"
              height="140"
            ></img>
          </Box>
        </Box>

        {/* ----------------- Right Side -------- */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#fff",
            width: "60%",
            height: "100%",
            padding: "40px",
            position: "relative",
          }}
        >
          <Contactform />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
