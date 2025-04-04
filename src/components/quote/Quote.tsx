import { Typography } from "@mui/material";
import React from "react";

type Props = {
  quote: string;
};

const Quote: React.FC<Props> = ({ quote }) => {
  return (
    <Typography variant="h2" mb={2} color="#0071E1">
      „{quote}”
      {/* „Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, itaque!” */}
      {/* „Lorem ipsum” */}
    </Typography>
  );
};

export default Quote;
