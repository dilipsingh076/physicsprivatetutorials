import Drawer from "@mui/material/Drawer";
import { Box,Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { brandLogo } from "../../utils";
const ResponsiveNav = ({ anchor, Tabs, state, toggleDrawer }) => {
  let location = useLocation().pathname;
  return (
    <>
      <Drawer anchor="left" open={state[anchor]} onClose={toggleDrawer(false)}>
        {/* Your drawer content goes here */}
        <Box
         sx={{
          width: "40vw",
          position: "relative",
        }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "7%",
              left: "10%",
              width: "120px",
              height: "40px",
            }}
          >
            <img src={brandLogo} style={{ width:"100%",height:"100%" }} alt="logoicon" />
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
              {Tabs?.map((el,index) => (
                <Box key={index} sx={{ textAlign: "start" }}>
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
                        fontSize: location === el.link ? "20px" : "16px",
                        color: location === el.link ? "#063995" : "#000",
                        
                        fontWeight: location === el.link ? 800 : 100,
                        fontFamily: "Montserrat",
                      }}
                    >
                      {el.Title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ResponsiveNav;