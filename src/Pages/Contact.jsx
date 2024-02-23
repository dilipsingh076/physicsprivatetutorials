import { Box, Typography } from "@mui/material";
import Contactform from "../components/ContactCompo/ContactForm";
import { bigellise } from "../utils";

const Contact = () => {
  return (
    <>
      <Box sx={{ textAlign: "center",mt:"120px" }}>
        <Typography
          sx={{
            color: "#063995",
            fontSize: {xs:"35px",md:"40px"},
            fontFamily: "Poppins",
            fontWeight: "700",
          }}
        >
          {" "}
          Contact Us
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "500", mb:{xs: "10px",md:"50px"} }}>
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
          height: "auto",
          display: "flex",
          // justifyContent: "space-between"
          mb: "50px",
          // flexDirection:{xs:"column",md:"row"},
          flexWrap:{xs:"wrap",md:"nowrap"}
        }}
      >
        <Box
          sx={{
            background: "#063995",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            color: "#fff",
            width:{xs:"100%",md: "40%"},
            padding: "40px",
            position: "relative",
            borderRadius: "10px",
            boxSizing: "border-box",
            gap: "30px",
          }}
        >
          <Box>
            <Typography sx={{  fontSize: {xs:"25px",md:"30px"},}}>
              Contact Information
            </Typography>
            <Typography sx={{ fontSize:{xs: "12px",md:"13px"} }}>
              Say something to start a live chat!
            </Typography>
          </Box>
          <Box
            sx={{
              height: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}> +91 9773499614</Typography>
            <Typography sx={{ fontSize: "14px" }}> physicsprivatetuotrials@gmail.com</Typography>
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
                fillOpacity="0.13"
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
            width:{xs:"100%",md: "60%"},
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
