import { Box , Container, Typography } from "@mui/material";
import aboutimage from "../assets/aboutimag.png";
import Infocard from "../components/AboutCompo/Infocard";
import { zigzag } from "../utils";


const Courses = () => {
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
            Courses
          </Typography>

          <Typography
            sx={{
              width: "70%",
              textAlign: "center",
              fontFamily: "Lato",
              fontSize: "18px",
            }}
          >
            we believe that learning physics should be an exciting journey that sparks curiosity and creativity. Our physics courses are designed to make the subject come alive for students of all ages, from preschool to pre-tertiary levels.
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

      </Container>
      {/* <AchivementQutes/> */}
    </>
  );
};

export default Courses;
