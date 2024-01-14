import { Box, Button, Typography } from "@mui/material";
import React from "react";
import first from "./Assets/1.png";
import second from "./Assets/2.png";
import third from "./Assets/41.png";
const Categorys = () => {
  let category = [
    {
      title: "11 Science ",
      desc: "Foundation emphasising core subjects like Physics, Chemistry, Mathematics.",
      btntitle: "more",
      img: first,
    },
    {
      title: "12 Science ",
      desc: "Advanced curriculum preparing for competitive exams.",
      btntitle: "more",
      img: second,
    },
    {
      title: "I.I.T ",
      desc: "Premier engineering institutions offering programs and research opportunities.",
      btntitle: "Explore courses ",
      img: third,
    },
    {
      title: "JEE Mains",
      desc: "Gateway to elite engineering colleges—excel in Physics, Chemistry, Mathematics.",
      btntitle: "more",
      img: second,
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", width: "80%", margin: "auto",flexWrap:"" }}>
        {category?.map((el) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding:"20px",
              boxSizing:"border-box",
              gap:"10px",
              borderRadius:"15px",
              cursor:"pointer",
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
              },
            }}
          >

            <img src={el?.img} style={{width:"70px",height:"70px"}} alt="" />
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize: "27px",
                color: "#063995",
                fontWeight: "600",
                textAlign: "center",

            }}
            >
              {el?.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "29px",
                textAlign: "center",
                width:"280px",
                height:"100px"
              }}
            >
              {el?.desc}
            </Typography>
            <Button sx={{
                background:"#fff",
                
                transition: "background 0.3s , color 0.3s ",
                "&:hover": {
                    background: "#063995",
                    color:"#FFF"
                },
                
                textTransform:"capitalize",boxShadow:"0px 10px 60px 0px rgba(38, 45, 118, 0.08)",padding:"5px 20px"}}> {el?.btntitle}</Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Categorys;
