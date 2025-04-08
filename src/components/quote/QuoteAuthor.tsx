import { Typography } from "@mui/material";
import React from "react";

type Props = {
  author: string;
};

const QuoteAuthor: React.FC<Props> = ({ author }) => {
  return (
    <Typography
      variant="h5"
      color="#023E7D"
      fontSize={{
        xs: "20px",
        sm: "24px",
      }}>
      {author}
    </Typography>
  );
};

export default QuoteAuthor;
