import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";

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
        console.log(data);

        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRandomIndex(randomIndex);
        }
      }
    };

    fetchDatabase();
  }, []);

  return (
    <Box
      position={"absolute"}
      // ----- ----- -----
      color={"white"}
      // ----- ----- -----
      left={"50%"}
      top={"50%"}
      sx={{
        transform: "translate(-50%, -50%)",
      }}>
      {quoteArr !== null && randomIndex !== null ? (
        <Box>"{quoteArr[randomIndex].content}"</Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
};

export default QuoteContainer;
