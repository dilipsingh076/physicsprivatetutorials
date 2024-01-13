import { Box, Button, Container, Typography } from "@mui/material";
import aboutimage from "../assets/aboutimag.png";
import Bluebtn from "../components/Buttons/Bluebtn";
import Infocard from "../components/AboutCompo/Infocard";
import frame1 from "../utils/1frame.png";
import teacherimg from "../utils/teacherimg.png"
import { textContent1, textContent2, textContent3 } from '../components/TextContent/TextContent';
import { useState } from "react";
import { zigzag } from "../utils";
import { TruncatedText } from "../components/TruncatedText/TruncatedText";


const About = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${aboutimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontFamily: "Source Serif",
              fontSize: "74px",
              fontWeight: "700",
            }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              width: "70%",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "18px",
            }}
          >
            PHYSICS PRIVATE TUTORIALS is your destination that offers expert coaching for 11th, 12th, JEE and NEET apirant.
          </Typography>
          {/* <Box sx={{ width: "20%" }}>
            <Bluebtn Buttontitle={"See More"} />
          </Box> */}
        </Box>
      </Box>

      {/* ------ Achivements Quests ---- */}

      <Container>
        <Box
          sx={{
            padding: "60px 0px 30px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Source Serif",
              fontSize: "34px",
              fontWeight: "600",
            }}
          >
            Preparing Students to Achieve Success
          </Typography>
          <img src={zigzag} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Infocard
            data={{
              title: "Developing Confident and Successful Learners",
              desc: "Founded by the education expert with decades of experience Prof. Rashmi B Choudhary, M.S.C Physics by Research (Mumbai) Physics Private Tutorials help our studends to achive their objectives in an enlightening enviourment filled with enerygy.",
            }}
          />
        </Box>
        <Box>
          <Infocard
            data={{
              position: "left",
              title: "Enjoy Learning with a Unique Classroom Experience",
              desc: "We provide step to step interaction with our students while they toward their goal.",
            }}
          />
        </Box>

        <Box>
          <Infocard
            data={{
              title: "Passionate Teachers That Make a Difference",
              desc: "We ensure great result oriented teaching with dedicated learning enviourment",
            }}
          />
        </Box>
        <Box>
          <Infocard
            data={{
              position: "left",
              title: "Empowering Futures: A Pledge to Personal and Professional Growth",
              desc: "we Provide Strong commitment for carrer objective presonal and professional developement.",
            }}
          />
        </Box>
        <Box>
          <Infocard
            data={{
              title: "Elevating Success Across Boards and Competitive Exams",
              desc: "Physics Private Tutorials provide a complete coaching for all boards [H.S.C, CBSE, I.S.C] along with board the incited do complete prepration for MHT-CET, JEE, Mains/Advance, NEET, BITS, NIT, IIT etc.",
            }}
          />
        </Box>
        <Box>
          <Infocard
            data={{
              position: "left",
              title: "Customized Learning Journey",
              desc: "We have special doubt leacture in small group regular test as per the student. We have regular counsellinge session for the better met of student.",
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "60px 0px 30px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Source Serif",
              fontSize: "34px",
              fontWeight: "600",
            }}
          >
            Teachers
          </Typography>
          <img src={zigzag} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
          }}
        >
          <img src={teacherimg} alt=""  style={{marginRight:"-150px",marginBottom:"-70PX"}}/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="348"
            height="155"
            viewBox="0 0 348 155"
            fill="none"
          >
            <path d="M0 119V34L347.5 0V154.5L0 119Z" fill="#063995" />
          </svg>
        </Box>

        <Box
          sx={{
            padding: "60px 0px 30px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Source Serif",
              fontSize: "34px",
              fontWeight: "600",
            }}
          >
            Why it’s works
          </Typography>
          <img src={zigzag} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "20vw",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={frame1}
              style={{ width: "100px", height: "100px", m: "auto" }}
              alt=""
            />
            <Typography
              sx={{
                fontFamily: "Source Serif",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              Personalized learning
            </Typography>
            <TruncatedText text={textContent1} maxLength={100} />
          </Box>

          <Box
            sx={{
              width: "20vw",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={frame1}
              style={{ width: "100px", height: "100px", m: "auto" }}
              alt=""
            />
            <Typography
              sx={{
                fontFamily: "Source Serif",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              Unlocking Potential
            </Typography>
            <TruncatedText text={textContent2} maxLength={100} />
          </Box>

          <Box
            sx={{
              width: "20vw",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={frame1}
              style={{ width: "100px", height: "100px", m: "auto" }}
              alt=""
            />
            <Typography
              sx={{
                fontFamily: "Source Serif",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              Tailored Education
            </Typography>
            <TruncatedText text={textContent3} maxLength={100} />
          </Box>
        </Box>
      </Container>
      {/* <AchivementQutes/> */}
    </>
  );
};

export default About;
