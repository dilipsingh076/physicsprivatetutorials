import { useState } from "react";
import { Button, Typography } from "@mui/material";

export const TruncatedText = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const truncatedText = isExpanded ? text : `${text.slice(0, maxLength)}...`;
  
    return (
      <Typography
        sx={{
          fontFamily: "Source Serif",
          fontSize: "16px",
          fontWeight: "500",
          cursor: 'pointer',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {truncatedText}
        <Button
          variant="text"
          color="primary"
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{ textTransform: 'none' }}
        >
          {isExpanded ? 'Show Less' : 'See More'}
        </Button>
      </Typography>
    );
  };
  