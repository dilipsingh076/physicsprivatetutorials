import { Box, Container, Typography } from "@mui/material";
import React from "react";

import aboutimage from "../assets/aboutimag.png";
import Bluebtn from "../components/Buttons/Bluebtn";
import Infocard from "../components/AboutCompo/Infocard";
import frame1 from "../utils/1frame.png";
import teacherimg from "../utils/teacherimg.png"
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
            From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom.
          </Typography>
          <Box sx={{ width: "20%" }}>
            <Bluebtn Buttontitle={"See More"} />
          </Box>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="284"
            height="40"
            viewBox="0 0 284 40"
            fill="none"
          >
            <path
              d="M181.034 0.697693C160.838 1.32264 140.654 2.37084 120.504 3.84228C102.218 4.16632 83.9294 4.49037 65.6438 4.81442C45.5794 5.17153 25.5149 5.52534 5.45371 5.88245C3.51273 5.91552 0.507031 7.34066 0.209436 9.49326C-0.117918 11.8674 2.81835 12.2642 4.47165 12.2377C17.5096 12.0063 30.5475 11.7748 43.5855 11.5434C38.1593 12.2344 32.7398 12.952 27.3203 13.7026C25.4421 13.9638 22.82 14.8433 22.2215 16.8968C21.6858 18.7286 23.359 20.0281 25.1346 20.0612C55.2446 20.577 85.3578 21.0961 115.468 21.612C121.876 21.7211 128.284 21.8335 134.692 21.9426C125.474 22.9511 116.268 24.1118 107.089 25.4245C92.6952 27.4878 78.361 29.9347 64.0897 32.7222C62.5489 33.0231 60.3632 34.3722 60.1284 36.1015C59.9003 37.7548 61.7222 38.8361 63.1837 38.8493C97.4269 39.1469 131.67 39.4478 165.913 39.7454C175.569 39.8281 185.221 39.914 194.876 39.9967C197.088 40.0165 199.925 39.385 201.039 37.2125C202.035 35.2682 200.17 33.6513 198.268 33.6348C165.305 33.3471 132.341 33.0594 99.3778 32.7718C100.297 32.6329 101.213 32.4907 102.132 32.3551C114.588 30.51 127.087 28.946 139.613 27.6664C164.677 25.107 189.853 23.6819 215.046 23.4008C216.161 23.3876 217.288 23.381 218.412 23.3744C231.182 23.5926 243.949 23.8142 256.719 24.0324C258.928 24.0688 261.775 23.4075 262.883 21.2482C263.901 19.2643 261.997 17.7465 260.112 17.6705C247.081 17.1481 234.036 16.9232 220.995 16.9993C203.923 16.705 186.851 16.414 169.779 16.1197C139.669 15.6039 109.556 15.0847 79.4456 14.5689C77.0186 14.5259 74.5882 14.4862 72.1612 14.4433C87.9271 12.7668 103.719 11.3483 119.532 10.1943C152.495 9.60899 185.462 9.02703 218.426 8.44176C238.49 8.08465 258.555 7.73084 278.616 7.37373C280.457 7.34066 283.162 6.07754 283.714 4.17955C284.257 2.32454 282.57 1.08126 280.801 1.01513C247.56 -0.221543 214.279 -0.330661 181.034 0.697693Z"
              fill="#C20000"
            />
          </svg>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Infocard
            data={{
              title: "Developing Confident and Successful Learners",
              desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
            }}
          />
        </Box>
        <Box>
          <Infocard
            data={{
              position: "left",
              title: "Enjoy Learning with a Unique Classroom Experience",
              desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
            }}
          />
        </Box>

        <Box>
          <Infocard
            data={{
              title: "Passionate Teachers That Make a Difference",
              desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
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



          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="284"
            height="40"
            viewBox="0 0 284 40"
            fill="none"
          >
            <path
              d="M181.034 0.697693C160.838 1.32264 140.654 2.37084 120.504 3.84228C102.218 4.16632 83.9294 4.49037 65.6438 4.81442C45.5794 5.17153 25.5149 5.52534 5.45371 5.88245C3.51273 5.91552 0.507031 7.34066 0.209436 9.49326C-0.117918 11.8674 2.81835 12.2642 4.47165 12.2377C17.5096 12.0063 30.5475 11.7748 43.5855 11.5434C38.1593 12.2344 32.7398 12.952 27.3203 13.7026C25.4421 13.9638 22.82 14.8433 22.2215 16.8968C21.6858 18.7286 23.359 20.0281 25.1346 20.0612C55.2446 20.577 85.3578 21.0961 115.468 21.612C121.876 21.7211 128.284 21.8335 134.692 21.9426C125.474 22.9511 116.268 24.1118 107.089 25.4245C92.6952 27.4878 78.361 29.9347 64.0897 32.7222C62.5489 33.0231 60.3632 34.3722 60.1284 36.1015C59.9003 37.7548 61.7222 38.8361 63.1837 38.8493C97.4269 39.1469 131.67 39.4478 165.913 39.7454C175.569 39.8281 185.221 39.914 194.876 39.9967C197.088 40.0165 199.925 39.385 201.039 37.2125C202.035 35.2682 200.17 33.6513 198.268 33.6348C165.305 33.3471 132.341 33.0594 99.3778 32.7718C100.297 32.6329 101.213 32.4907 102.132 32.3551C114.588 30.51 127.087 28.946 139.613 27.6664C164.677 25.107 189.853 23.6819 215.046 23.4008C216.161 23.3876 217.288 23.381 218.412 23.3744C231.182 23.5926 243.949 23.8142 256.719 24.0324C258.928 24.0688 261.775 23.4075 262.883 21.2482C263.901 19.2643 261.997 17.7465 260.112 17.6705C247.081 17.1481 234.036 16.9232 220.995 16.9993C203.923 16.705 186.851 16.414 169.779 16.1197C139.669 15.6039 109.556 15.0847 79.4456 14.5689C77.0186 14.5259 74.5882 14.4862 72.1612 14.4433C87.9271 12.7668 103.719 11.3483 119.532 10.1943C152.495 9.60899 185.462 9.02703 218.426 8.44176C238.49 8.08465 258.555 7.73084 278.616 7.37373C280.457 7.34066 283.162 6.07754 283.714 4.17955C284.257 2.32454 282.57 1.08126 280.801 1.01513C247.56 -0.221543 214.279 -0.330661 181.034 0.697693Z"
              fill="#C20000"
            />
          </svg>


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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="284"
            height="40"
            viewBox="0 0 284 40"
            fill="none"
          >
            <path
              d="M181.034 0.697693C160.838 1.32264 140.654 2.37084 120.504 3.84228C102.218 4.16632 83.9294 4.49037 65.6438 4.81442C45.5794 5.17153 25.5149 5.52534 5.45371 5.88245C3.51273 5.91552 0.507031 7.34066 0.209436 9.49326C-0.117918 11.8674 2.81835 12.2642 4.47165 12.2377C17.5096 12.0063 30.5475 11.7748 43.5855 11.5434C38.1593 12.2344 32.7398 12.952 27.3203 13.7026C25.4421 13.9638 22.82 14.8433 22.2215 16.8968C21.6858 18.7286 23.359 20.0281 25.1346 20.0612C55.2446 20.577 85.3578 21.0961 115.468 21.612C121.876 21.7211 128.284 21.8335 134.692 21.9426C125.474 22.9511 116.268 24.1118 107.089 25.4245C92.6952 27.4878 78.361 29.9347 64.0897 32.7222C62.5489 33.0231 60.3632 34.3722 60.1284 36.1015C59.9003 37.7548 61.7222 38.8361 63.1837 38.8493C97.4269 39.1469 131.67 39.4478 165.913 39.7454C175.569 39.8281 185.221 39.914 194.876 39.9967C197.088 40.0165 199.925 39.385 201.039 37.2125C202.035 35.2682 200.17 33.6513 198.268 33.6348C165.305 33.3471 132.341 33.0594 99.3778 32.7718C100.297 32.6329 101.213 32.4907 102.132 32.3551C114.588 30.51 127.087 28.946 139.613 27.6664C164.677 25.107 189.853 23.6819 215.046 23.4008C216.161 23.3876 217.288 23.381 218.412 23.3744C231.182 23.5926 243.949 23.8142 256.719 24.0324C258.928 24.0688 261.775 23.4075 262.883 21.2482C263.901 19.2643 261.997 17.7465 260.112 17.6705C247.081 17.1481 234.036 16.9232 220.995 16.9993C203.923 16.705 186.851 16.414 169.779 16.1197C139.669 15.6039 109.556 15.0847 79.4456 14.5689C77.0186 14.5259 74.5882 14.4862 72.1612 14.4433C87.9271 12.7668 103.719 11.3483 119.532 10.1943C152.495 9.60899 185.462 9.02703 218.426 8.44176C238.49 8.08465 258.555 7.73084 278.616 7.37373C280.457 7.34066 283.162 6.07754 283.714 4.17955C284.257 2.32454 282.57 1.08126 280.801 1.01513C247.56 -0.221543 214.279 -0.330661 181.034 0.697693Z"
              fill="#C20000"
            />
          </svg>
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
            <Typography
              sx={{
                fontFamily: "Source Serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </Typography>
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
              Personalized learning
            </Typography>
            <Typography
              sx={{
                fontFamily: "Source Serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </Typography>
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
              Personalized learning
            </Typography>
            <Typography
              sx={{
                fontFamily: "Source Serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </Typography>
          </Box>
        </Box>
      </Container>
      {/* <AchivementQutes/> */}
    </>
  );
};

export default About;
