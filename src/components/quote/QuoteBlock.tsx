import { Box } from "@mui/material";
import React from "react";
import Quote from "./Quote";
import QuoteAuthor from "./QuoteAuthor";

type Props = {
  author: string;
  quote: string;
};

const QuoteBlock: React.FC<Props> = ({ author, quote }) => {
  return (
    <Box
      position={"absolute"}
      left={"50%"}
      top={"50%"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}>
      <Quote quote={quote} />
      <QuoteAuthor author={author} />
    </Box>
  );
};

export default QuoteBlock;
