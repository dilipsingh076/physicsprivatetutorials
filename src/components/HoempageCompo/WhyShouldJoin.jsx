import { Box, Button, Typography } from "@mui/material";
import contentlogo from "./Assets/mdi_star-circle.png";
import posterimg from "./Assets/girlposterimg.png";
const WhyShouldJoin = () => {
  let benifits = [
    {
      icon: contentlogo,
      content:
        "Teachers don’t get lost in the grid view and have a dedicated Podium space. ",
    },
    {
      icon: contentlogo,
      content:
        "Teachers don’t get lost in the grid view and have a dedicated Podium space. ",
    },
    {
      icon: contentlogo,
      content:
        "Teachers don’t get lost in the grid view and have a dedicated Podium space. ",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          background: "#063995",
          width: { xs: "90%", md: "80%" },
          display: "flex",
          position: "relative",
          m: "auto",
          color: "#fff",
          padding: "40px",
          boxSizing: "border-box",
          borderRadius: "15px",
          flexWrap: "wrap",
          height:{xs:"69.5vh",md:""}
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "30px", md: "10px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "25px", md: "40px" },
              fontWeight: "700",
              lineHeight: { xs: "30px", md: "53px" },
              // letterSpacing: "-2.86px",
            }}
          >
            Why Should You Join Our Course ?
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {benifits.map((el,index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "start", gap: "10px" }}>
                <Box sx={{ width: "30px", height: "20px" }}>
                  <img
                    src={el?.icon}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </Box>
                <Typography sx={{ fontSize: { xs: "15px", md: "20px" } }}>
                  {el?.content}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button
            sx={{
              background: "#fff",
              color: "#063995",
              padding: "10px 20px",
              borderRadius: "20px",
              width: { xs: "40%", md: "30%" },
            }}
          >
            Buy Now
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: { xs: "0px", md: "0" },
            m: "auto",
            top: { xs: "290px", md: "-120px" },
            boxSizing: "border-box",
            width: { xs: "95%", md: "60%" }
          }}
        >
     
            <img
              style={{ width: "100%", height: "100%" }}
              src={posterimg}
              alt=""
            />
          
        </Box>
      </Box>
    </div>
  );
};

export default WhyShouldJoin;
