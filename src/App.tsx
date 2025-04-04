import React from "react";
import Box from "@mui/material/Box";
import PageHeader from "./components/navigation/PageHeader";
import AuthorInfo from "./components/navigation/AuthorInfo";
import QuoteContainer from "./components/quote/QuoteContainer";

function App() {
  return (
    <Box bgcolor={"#000815"} width="100%" height="100vh">
      <nav>
        <PageHeader>InspiroQuote</PageHeader>
        <AuthorInfo />
      </nav>
      <main>
        <QuoteContainer />
      </main>
    </Box>
  );
}

export default App;
