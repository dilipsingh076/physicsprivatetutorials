import { Box } from "@mui/system";
import React from "react";
import { Course1, PlayButton, Vector1, homeModel } from "../utils";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/HoempageCompo/SectionTitle";
import Categorys from "../components/HoempageCompo/Categorys";
import PopularCources from "../components/HoempageCompo/PopularCources";

const ProgramItem = ({ title, background, border }) => {
  return (
    <Paper
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 1,
        background: background || "transparent",
        border: border || "none",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1,
        display: "flex",
      }}
    >
      <Typography
        sx={{
          color: background ? "white" : "#818C96",
          fontSize: 12,
          fontFamily: "Raleway",
          fontWeight: "500",
          textTransform: "capitalize",
          wordWrap: "break-word",
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

const Homepage = () => {
  const navigate = useNavigate();

  const handleEnrollNow = () => {
    // Redirect to "/contact" when the button is clicked
    navigate("/contact");
  };

  return (
    <>
      <Box
        // className={'flex justify-around'}
        sx={{
          // border: '1px solid red',
          width: "100%",
          bgcolor: "#dde9ff",
          color: "#2D2D2Dck",
          marginTop: "-100px",
          height: "650px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* left box */}
        <Box
          // className={'flex justify-around items-center '}
          sx={{
            // border: '1px solid blue',
            width: "50%",
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: "65px",
          }}
        >
          <Box
            sx={{
              // border: '1px solid pink',
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                // border: '1px solid red',
                color: "#063995",
                fontSize: "48px",
                fontWeight: "700",
                wordWrap: "break-word",
                width: "60%",
              }}
            >
              Grow up your skills by online courses with onlearning
            </Typography>
          </Box>
        </Box>
        {/* right box */}
        <Box
          className={"flex justify-around align-center"}
          sx={{
            // border: '1px solid red',
            width: "50%",
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: "65px",
          }}
        >
          <img src={homeModel} alt="Brand Logo" style={{ height: "580px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          // border: "1px solid red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "10%",
            height: "180px",
            background: "#B1CDFD",
            borderRadius: 9999,
            display: "flex",
            justifyContent: "center",
            marginTop: "-85px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "60%",
              height: "60%",
              background: "#063995",
              borderRadius: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ height: "40px" }} src={PlayButton} />
          </div>
        </div>
      </Box>
      <Box
        sx={{
          // border: '1px solid blue',
          marginTop: "30px",
        }}
        width="100%"
        height="100%"
      >
        <Box>
          <SectionTitle title={"Popular Courses"} />

          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              sx={{
                width: "70%",
                height: 144,
                position: "relative",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <ProgramItem title="All Program" background="#063995" />
                <ProgramItem title="UI/UX Design" border="1px #C4C4C4 solid" />
                <ProgramItem
                  title="Program Design"
                  border="1px #C4C4C4 solid"
                />
                <ProgramItem
                  title="Program Design"
                  border="1px #C4C4C4 solid"
                />
                <ProgramItem
                  title="Program Design"
                  border="1px #C4C4C4 solid"
                />
                <ProgramItem
                  title="Program Design"
                  border="1px #C4C4C4 solid"
                />
              </Box>
            </Paper>
          </Box>
        </Box>

        <PopularCources />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          mt: "20vh ",
        }}
      >
        <SectionTitle title={"Courses Category"} />
        <Typography
          sx={{
            color: "#696984",
            textAlign: "center",
            fontFamily: "Raleway",
            lineHeight: "160%",
            width: "40%",
            margin: "auto",
          }}
        >
          Onlearing is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </Typography>

        <Box>
          <Categorys />
        </Box>
      </Box>;
    </>
  );
};

export default Homepage;