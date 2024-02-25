import { Box } from "@mui/system";
import {  PlayButton, homeModel } from "../utils";
import {Typography} from "@mui/material";
import Categorys from "../components/HoempageCompo/Categorys";
import PopularCources from "../components/HoempageCompo/PopularCources";
import BenifitsDetails from "../components/HoempageCompo/BenifitsDetails";
import WhyShouldJoin from "../components/HoempageCompo/WhyShouldJoin";

const Homepage = () => {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#dde9ff",
          color: "#2D2D2Dck",
          marginTop: "-100px",
          // height: "650px",
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: "65px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              m: "auto",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: { xs: "14px", md: "18px" },
                width: { xs: "40%", md: "30%" },
                background: "#fff",
                borderRadius: "15px",
                textAlign: "center",
                padding: "10px",
                mt: { xs: "50px", md: "0px" },
              }}
            >
              Never stop learning
            </Typography>
            <Typography
              sx={{
                color: "#063995",
                fontSize: { xs: "36px", md: "48px" },
                fontWeight: "700",
                textAlign: {xs:"center",md:"start"},
                lineHeight: { xs: "50px", md: "70px" },
                width: { xs: "100%", md: "80%" },
              }}
            >
              Grow up your skills by online courses with Physics Private Tutorials
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: "65px",
          }}
        >
          <img
            src={homeModel}
            alt="Brand Logo"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          // border: "1px solid red",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "20%", md: "10%" },
            height: { xs: "100px", md: "180px" },
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
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: "0vh", md: "10vh" },
          padding: { xs: "50px 0px", md: "" },
        }}
      >
        <PopularCources />
      </Box>

      <Box
        sx={{
          mt: { xs: "0vh", md: "10vh" },
          padding: { xs: "50px 0px", md: "" },
        }}
      >
        <Categorys />
      </Box>
      <Box
        sx={{
          mt: { xs: "0vh", md: "10vh" },
          background: { xs: "#F8F8FF", md: "#fff" },
          padding: { xs: "50px 0px", md: "" },
        }}
      >
        {/* --------- Benifits ---------- */}

        <BenifitsDetails />
      </Box>
      <Box
        sx={{
          mt: { xs: "0vh", md: "10vh" },
          padding: { xs: "50px 0px 0px 0px", md: "" },
        }}
      >
        {/* --------- Benifits ---------- */}

        <WhyShouldJoin />
      </Box>
    </>
  );
};

export default Homepage;
