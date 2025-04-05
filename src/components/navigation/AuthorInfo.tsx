import { Box, Typography } from "@mui/material";
import React from "react";
import Icons from "./Icons";

const AuthorInfo = () => {
  return (
    <Box position={"absolute"} right={15} top={10}>
      <Icons />
      <Typography
        variant="h6"
        color="#023E7D"
        sx={{
          transition: "all 0.1s ease-in-out ",
          "&:hover": {
            color: "#0180ff",
          },
        }}>
        by oke
      </Typography>
    </Box>
  );
};

export default AuthorInfo;
