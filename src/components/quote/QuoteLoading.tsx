import { Box, CircularProgress } from "@mui/material";
import React from "react";

const QuoteLoading = () => {
  return (
    <Box
      position={"absolute"}
      left={"50%"}
      top={"50%"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}>
      <CircularProgress size="4rem" sx={{ color: "#0071E1" }} />
    </Box>
  );
};

export default QuoteLoading;
