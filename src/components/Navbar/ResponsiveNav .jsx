import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Box, Divider, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
// import logoicon from "../../Utils/Logo/Logo.png";
// import { imgsize } from "../../Styles/CommonStyles";
const ResponsiveNav = ({ anchor, Tabs, state, toggleDrawer }) => {
  let location = useLocation().pathname;
  return (
    <>
      <Drawer anchor="left" open={state[anchor]} onClose={toggleDrawer(false)}>
        {/* Your drawer content goes here */}
        <Box
          style={{
            width: "70vw",
            background: "#08346D ",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "7%",
              left: "10%",
              width: "40px",
              height: "40px",
            }}
          >
            {/* <img src={logoicon} style={{ ...imgsize }} alt="logoicon" /> */}
          </Box>
          <Box
            sx={{
              height: "93vh",
              width: "100%",
              // background: "#08346D ",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                height: "50vh",
                background: "#08346D ",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
                width: "80%",
                // pl:"10px",
                // border:"solid red",
                m: "auto",
              }}
            >
              {Tabs?.map((el) => (
                <Box sx={{ textAlign: "start" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={el.link}
                    onClick={toggleDrawer(false)}
                  >
                    <Typography
                      sx={{
                        border: "0.5px solid transparent",
                        borderRadius: "10px",
                        padding: "5px",
                        width: "100%",
                        textAlign: "start",
                        fontSize: location == el.link ? "20px" : "16px",
                        color: "#fff",
                        fontWeight: location == el.link ? 800 : 100,
                        fontFamily: "Montserrat",
                      }}
                    >
                      {el.Title}
                    </Typography>
                  </Link>
                  {/* <Divider sx={{background:"black",mt:"10px",width:"100%"}}/> */}
                </Box>
              ))}
              <Link to={"/signup"} style={{ width: "100%" }}>
                <Button
                  sx={{
                    padding: "7px 0px",
                    bgcolor: "#CED6E2",
                    width: "180px",
                    color: "#043873",
                    fontSize: "14px",
                    width: "80%",
                    textTransform: "capitalize",
                    borderRadius: "5px",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      background: "#052349",
                      color: "#fff",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>

              <Link to={"/signup"} style={{ width: "100%" }}>
                <Button
                  sx={{
                    padding: "7px 0px",
                    bgcolor: "#CED6E2",
                    color: "#043873",
                    width: "80%",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    borderRadius: "5px",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      background: "#052349",
                      color: "#fff",
                    },
                  }}
                >
                  Signup
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ResponsiveNav;