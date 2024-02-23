import { Button } from "@mui/material";

const Bluebtn = ({ Buttontitle }) => {
  return (
    <>
      <Button
        sx={{
          width: "100%",
          fontFamily: "Raleway",
          borderRadius: "10px",
          color: "#fff",
          background: "#063995",
          padding: { xs: "5px", md: "10px" },
          textTransform: "capitalize",
        }}
      >
        {Buttontitle}
      </Button>
    </>
  );
};

export default Bluebtn;
