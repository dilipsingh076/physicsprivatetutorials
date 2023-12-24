import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ResponsiveNav from "./ResponsiveNav ";
import { brandLogo } from "../../utils";
// import logo from "../../Utils/Logo/Logo.png";
// import logoframe from "../../Utils/Logo/Homenavfram.png";
// import normalmenue from "../../Utils/Logo/restmenu.png";
// import activemenue from "../../Utils/Logo/activemenu.png";
// import { imgsize } from "../../Styles/CommonStyles";
 
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Navbar = () => {
  let location = useLocation().pathname;

  const [state, setState] = useState({
    left: false, // Only the left anchor is kept
  });

  let navigate = useNavigate();

  const handeldlogin = () => {
    let resdata = JSON.parse(localStorage.getItem("data"));
    console.log(resdata);
    if (resdata?.r?.email_verified == 1) {
    
      navigate("/work/");
    } else {
      navigate("/login");
    }
  };

  const anchor = "left"; // Set the anchor to 'left' statically

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Function for hiding the navbar on scroll down
  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  let Tabs = [
    {
      Title: "Home",
      link: "/",
    },
    {
      Title: "About",
      link: "/about",
    },
    {
      Title: "Careers",
    },
    {
      Title: "Blog",
    },
  
    {
      Title: "Contact us",
      link: "/contact",
    },
  ];

  return (
    <>
      <ResponsiveNav
        anchor={anchor}
        Tabs={Tabs}
        state={state}
        toggleDrawer={toggleDrawer}
      />
      <HideOnScroll>
        <AppBar
          position="fixed"
          style={{
            background: "#fff",
            boxSizing: "border-box",
            boxShadow: "none",
            width:"100%",
            boxShadow:"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;"
          }}
        >
          <Toolbar>
            {/* Images Box */}
            <Box
              sx={{
                display: "flex",
                justifyContent:"space-around",
                width: "100vw",
                alignItems: "center",
                margin: "auto",
                boxSizing: "border-box",
                padding:"10px",
             
              
              }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Link to={"/"}>
                  <Box sx={{ width: { xs: "250px", md: "140px" } }}>
                      <img src={brandLogo} style={{ width:"100%",height:"100%"}} alt="" />  
                  </Box>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Link to={"/"}>
                  <Box sx={{width: { xs: "100px", md: "200px" }, height: "30px" }}>
                  <img src={brandLogo} style={{ width:"100%",height:"100%"}} alt="" /> 
                  </Box>
                </Link>
              </Box>

              {/* Navbar Content */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                  width: "72%",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "58%",
                    boxSizing: "border-box",
                    // border:"solid red"
                  }}
                >
                  {Tabs?.map((el) => (
                    <Link to={el.link} style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                            color:"#000",
                          fontSize: "15px",
                          fontWeight: location == el.link ? "800" : "400",
                          color: location == el.link ? "#063995" : "#000",
                          cursor: "pointer",
                          fontFamily: "Montserrat",
                          lineHeight: "120%",
                          letterSpacing:"0.6px"
                        }}
                      >
                        {el.Title}
                      </Typography>
                    </Link>
                  ))}
                </Box>

             
              </Box>

              {/* Hamburger Logo */}
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Box
                  onClick={toggleDrawer(true)}
                  sx={{
                    width: { xs: "15px", sm: "20px" },
                    height: { xs: "15px", sm: "25px" },
                  }}
                >
              {state[anchor] ?  <MenuOpenIcon  sx={{color:"#000",cursor:"pointer"}}/> :<MenuIcon  sx={{color:"#000",cursor:"pointer"}} />}
              
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* Your page content goes here */}
    </>
  );
};

export default Navbar