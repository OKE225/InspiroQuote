import { Typography } from "@mui/material";
import React from "react";

type Props = {
  quote: string;
};

const Quote: React.FC<Props> = ({ quote }) => {
  return (
    <Typography
      variant="h2"
      mb={2}
      color="#0180ff"
      fontSize={{
        xs: "36px",
        sm: "52px",
        md: "60px",
        lg: "60px",
        xl: "60px",
      }}>
      „<i>{quote}</i>”
    </Typography>
  );
};

export default Quote;
