import { Box, Link } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";

const Icons = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={0.5}>
      <Link
        href="https://www.google.pl/?hl=pl"
        color={"#023E7D"}
        width={24}
        height={24}
        mr={0.75}
        sx={{
          transition: "all 0.1s ease-in-out ",
          "&:hover": {
            color: "#0180ff",
          },
        }}>
        <GitHubIcon />
      </Link>
      <Link
        href="https://www.google.pl/?hl=pl"
        color={"#023E7D"}
        width={24}
        height={24}
        ml={0.75}
        sx={{
          transition: "all 0.1s ease-in-out ",
          "&:hover": {
            color: "#0180ff",
          },
        }}>
        <MessageIcon />
      </Link>
    </Box>
  );
};

export default Icons;
