import { Box, Divider, Typography } from "@mui/material";
import Bluebtn from "../Buttons/Bluebtn";

const Infocard = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: data?.position ? "row-reverse" : "row",
          flexWrap: { xs: "wrap-reverse", md: "nowrap" },
          borderBottom:{xs: "0.5px solid gray",md:"none"},
          padding: {xs:"20px 10px",md:"0px"},
          boxSizing: "border-box",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: { xs: "100%", md: "42%" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontWeight: "600",
              fontSize: { xs: "22px", md: "30px" },
              lineHeight: { xs: "30px", md: "40px" },
            }}
          >
            {data?.title}
          </Typography>
          <Divider />
          <Typography>{data?.desc}</Typography>
          <Box sx={{ width: "40%" }}>
            <Bluebtn Buttontitle={"View More"} />
          </Box>
        </Box>

        <Box sx={{ width: "420px", height: "430px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 454 450"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M235.972 0.0029814C307.382 -0.252306 383.329 15.8226 426.043 73.05C467.592 128.715 454.259 203.206 438.06 270.752C422.165 337.03 400.15 408.462 338.589 437.715C277.285 466.845 208.14 438.849 147.199 408.965C86.9911 379.44 28.6074 340.594 9.47353 276.324C-11.0889 207.255 1.91218 130.136 47.5965 74.4029C92.6243 19.4704 164.943 0.256903 235.972 0.0029814Z"
              fill="#C20000"
              fillOpacity="0.1"
            />
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default Infocard;
