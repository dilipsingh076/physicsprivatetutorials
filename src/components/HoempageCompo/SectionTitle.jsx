import React from "react";
import { Box, Container, Typography } from "@mui/material";
const SectionTitle = ({ title }) => {
  return (
    <>
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{ color:"#063995",fontSize: "40px",fontFamily:"Inter",fontWeight:"700",textAlign:"center" }}>{title}</Typography>
        <svg xmlns="http://www.w3.org/2000/svg" width="178" height="10" viewBox="0 0 178 10" fill="none">
  <path d="M1 8.32205C49.5338 0.233062 116.717 -0.441062 177.834 8.32205" stroke="#C20000" stroke-width="2.24694"/>
</svg>
      </Box>
    </>
  );
};

export default SectionTitle;
