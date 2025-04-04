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
      bottom={"20%"}
      width={"52px"}
      height={"52px"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}>
      <RefreshIcon
        sx={{ fontSize: 52, color: "#0071E1", cursor: "pointer" }}
        onClick={() => {
          refreshQuote();
        }}
      />
    </Box>
  );
};

export default QuoteRefreshArrow;
