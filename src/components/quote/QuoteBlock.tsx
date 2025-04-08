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
      }}
      width={{
        xs: "95%",
        sm: "90%",
        md: "85%",
        lg: "80%",
        xl: "60%",
      }}
      maxWidth={`${1920 * 0.6}px`}
      textAlign={"center"}>
      <Quote quote={quote} />
      <QuoteAuthor author={author} />
    </Box>
  );
};

export default QuoteBlock;
