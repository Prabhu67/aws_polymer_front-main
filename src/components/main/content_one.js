import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Contentone = () => {
  return (
    <Box
      sx={{
        paddingBlock: { lg: "80px", md: "70px", xs: "40px" },
        textAlign: "center",
        background: "#fff",
        borderBottom: "1px solid #f4f5f9"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "ClashGrotesk"
        }}
      >
        aws_browser.csv
      </Typography>
    </Box>
  );
};

export default Contentone;
