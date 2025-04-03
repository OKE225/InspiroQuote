import React from "react";
import Box from "@mui/material/Box";
import PageHeader from "./components/PageHeader";
import AuthorInfo from "./components/AuthorInfo";

function App() {
  return (
    <Box bgcolor={"#000815"} width="100%" height="100vh">
      <nav>
        <PageHeader>InspiroQuote</PageHeader>
        <AuthorInfo />
      </nav>
    </Box>
  );
}

export default App;
