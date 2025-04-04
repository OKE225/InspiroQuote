import { Typography } from "@mui/material";
import React from "react";

type Props = {
  author: string;
};

const QuoteAuthor: React.FC<Props> = ({ author }) => {
  return (
    <Typography variant="h5" color="#023E7D" ml={3}>
      {author}
    </Typography>
  );
};

export default QuoteAuthor;
