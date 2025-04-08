import { Box } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";
import IconLink from "./IconLink";

const IconsGroup = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={0.5}>
      <IconLink to="https://github.com/OKE225" mr={0.75}>
        <GitHubIcon />
      </IconLink>

      <IconLink to="https://discord.com/users/676854872678858771" ml={0.75}>
        <MessageIcon />
      </IconLink>
    </Box>
  );
};

export default IconsGroup;
