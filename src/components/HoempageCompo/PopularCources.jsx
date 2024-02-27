import { Box,   Paper, Typography ,Button,} from "@mui/material";
import img1 from "./Assets/img1.png";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";

// const ProgramItem = ({ title, background, border }) => {
//   return (
//     <Paper
//       sx={{
//         paddingLeft: 2,
//         paddingRight: 2,
//         paddingTop: 1,
//         paddingBottom: 1,
//         borderRadius: 1,
//         background: background || "transparent",
//         border: border || "none",
//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//         gap: 1,
//         display: "flex",
//       }}
//     >
//       <Typography
//         sx={{
//           color: background ? "white" : "#818C96",
//           fontSize: 12,
//           fontFamily: "Raleway",
//           fontWeight: "500",
//           textTransform: "capitalize",
//           wordWrap: "break-word",
//         }}
//       >
//         {title}
//       </Typography>
//     </Paper>
//   );
// };
const PopularCources = () => {
  const navigate = useNavigate()
  let category = [
    {
      title: "Product Management Basic - Course ",
      desc: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      btntitle: "enroll now",
      img: img1,
    },

    {
      title: "Product Management Basic - Course ",
      desc: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      btntitle: "enroll now",
      img: img1,
    },

    {
      title: "Product Management Basic - Course ",
      desc: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      btntitle: "enroll now",
      img: img1,
    },

    {
      title: "Product Management Basic - Course ",
      desc: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      btntitle: "enroll now",
      img: img1,
    },
  ];
  return (
    <>
     <Box>
          <SectionTitle title={"Popular Courses"} />

          <Box
          sx={{mt:{xs:"30px",md:"0px"}}}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              sx={{
                width: "100%",
                height: 90,
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
                  flexWrap:"wrap",
                  gap: 1,
                  boxSizing:"border-box",
                }}
              >
              <Typography
                sx={{
                  color: "#696984",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  lineHeight: "160%",
                  width: { xs: "100%", sm: "40%" },
                  margin: "auto",
                }}
              >
                JEE Main & Advanced Prep Course: Comprehensive curriculum preparing students for both JEE Main and Advanced exams, featuring intensive subject coverage, practice sessions, and mock tests.

              </Typography>
                {/* <ProgramItem title="All Program" background="#063995" />
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
                /> */}
              </Box>
            </Paper>
          </Box>
        </Box>
      <Box sx={{ pt:"30px",display: "flex",flexWrap:{xs:"wrap" ,md:"nowrap"}, width: "85%", margin: "auto", gap: {xs:"30px",sm:"20px"},boxSizing:"border-box" }}>
        {category?.map((el,index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
              background: "#fff",
              gap: {xs:"10px",sm:"10px"},
              borderRadius: "15px",
              boxShadow: "0px 10px 60px 0px rgba(38, 45, 118, 0.08)",
              cursor: "pointer",
              transition: "background 0.3s ,color 0.3s",
              "&:hover": {
                background: "#DDE9FF",
              },
            }}
          >
            <img
              src={el?.img}
              style={{
                width: "100%",
                height: "180px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
              alt=""
            />
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "18px",
                  color: "#063995",
                  fontWeight: "800",
                  textAlign: "start",
                  lineHeight: "150%",
                }}
              >
                {el?.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  textAlign: "start",
                  width: "280px",
                  color: "#4D4D4D",
                  height: "100px",
                }}
              >
                {el?.desc}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Inter",
                    color: "#C20000",
                    lineHeight: "150%",
                    fontSize: "16px",
                  }}
                >
                  $ 320
                </Typography>

                <Button
                  sx={{
                    background: "#063995",
                    color: "#FFF",
                    transition: "background 0.3s , color 0.3s ",
                    "&:hover": {},

                    textTransform: "capitalize",
                    boxShadow: "0px 10px 60px 0px rgba(38, 45, 118, 0.08)",
                    padding: "5px 20px",
                  }}
                  onClick={()=> navigate('/contact')}
                >
                  {" "}
                  {el?.btntitle}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PopularCources;
