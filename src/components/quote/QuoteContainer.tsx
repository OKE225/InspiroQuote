import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import QuoteRefreshArrow from "./QuoteRefreshArrow";
import QuoteBlock from "./QuoteBlock";
import QuoteLoading from "./QuoteLoading";

const QuoteContainer = () => {
  const [quoteArr, setQuoteArr] = useState<null | any[]>(null);
  const [randomIndex, setRandomIndex] = useState<null | number>(null);

  useEffect(() => {
    const fetchDatabase = async () => {
      const { data, error } = await supabase
        .from("quotes")
        .select("*, authors (*)");

      if (error) {
        setQuoteArr(null);
      } else {
        setQuoteArr(data);

        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRandomIndex(randomIndex);
        }
      }
    };

    fetchDatabase();
  }, []);

  const refreshQuote = () => {
    if (quoteArr && quoteArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * quoteArr.length);
      setRandomIndex(randomIndex);
    }
  };

  return (
    <Box>
      {quoteArr !== null && randomIndex !== null ? (
        <>
          <QuoteBlock
            author={quoteArr[randomIndex].authors.name}
            quote={quoteArr[randomIndex].content}
          />
          <QuoteRefreshArrow refreshQuote={refreshQuote} />
        </>
      ) : (
        <QuoteLoading />
      )}
    </Box>
  );
};

export default QuoteContainer;
