import { Box, Button, Typography } from "@mui/material";
import React from "react";
import img1 from "./Assets/img1.png";
const PopularCources = () => {
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
      <Box sx={{ display: "flex", width: "85%", margin: "auto", gap: "20px",boxSizing:"border-box" }}>
        {category?.map((el) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
              background: "#fff",
              gap: "10px",
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
                    fontWeight: "700",
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
