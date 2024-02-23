import { Box, Button, Typography } from "@mui/material";
import details1icon from "./Assets/details1.png";
import idcardinfo from "./Assets/idcardframe.png";
const BenifitsDetails = () => {
  let Benifits = [
    {
      img: details1icon,
      content:
        "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    },
    {
      img: details1icon,
      content:
        "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    },
    {
      img: details1icon,
      content:
        "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "90%", md: "80%" },
          m: "auto",
          gap: "20px",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* ----- Centent ---------- */}
          <Button
            sx={{
              width: { xs: "40%", md: "20%" },
              textTransform: "capitalize",
              background: "#F5F5F5",
              borderRadius: "5px",
            }}
          >
            Benifits
          </Button>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#063995",
            }}
          >
            Get Student ID card
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "0px", md: "10px" },
            }}
          >
            {Benifits?.map((el,index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "0px", md: "10px" },
                }}
              >
                <Box sx={{ width: "80px", height: { xs: "70px", md: "80px" } }}>
                  <img
                    src={el?.img}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                </Box>
                <Typography>{el?.content}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            src={idcardinfo}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Box>
      </Box>
    </div>
  );
};

export default BenifitsDetails;
