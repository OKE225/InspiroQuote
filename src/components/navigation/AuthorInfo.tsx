import { Box, Link, Typography } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";

const AuthorInfo = () => {
  return (
    <Box position={"absolute"} right={15} top={10}>
      <Box
        display={"flex"}
        color={"#0071E1"}
        justifyContent={"center"}
        mb={0.5}>
        <Link
          href="https://www.google.pl/?hl=pl"
          width={24}
          height={24}
          mr={0.75}>
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.google.pl/?hl=pl"
          width={24}
          height={24}
          ml={0.75}>
          <MessageIcon />
        </Link>
      </Box>
      <Typography variant="h6" color="#023E7D">
        by oke
      </Typography>
    </Box>
  );
};

export default AuthorInfo;
