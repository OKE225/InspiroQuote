import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box } from "@mui/material";

type Props = {
  refreshQuote: () => void;
};

const QuoteRefreshArrow: React.FC<Props> = ({ refreshQuote }) => {
  return (
    <Box
      textAlign={"center"}
      position={"absolute"}
      left={"50%"}
      bottom={{
        xs: "2%",
        sm: "5%",
        md: "5%",
        lg: "7.5%",
        xl: "12.5%",
      }}
      width={"52px"}
      height={"52px"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}>
      <RefreshIcon
        sx={{ fontSize: 52, color: "#0180ff", cursor: "pointer" }}
        onClick={() => {
          refreshQuote();
        }}
      />
    </Box>
  );
};

export default QuoteRefreshArrow;
