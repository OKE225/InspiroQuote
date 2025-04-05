import { Typography } from "@mui/material";
import React from "react";

type Props = {
  quote: string;
};

const Quote: React.FC<Props> = ({ quote }) => {
  return (
    <Typography variant="h2" mb={2} color="#0180ff">
      „<i>{quote}</i>”
    </Typography>
  );
};

export default Quote;
