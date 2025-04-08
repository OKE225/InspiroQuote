import { Link } from "@mui/material";
import React from "react";

type Props = {
  to: string;
  children: React.ReactNode;
  mr?: number;
  ml?: number;
};

const IconLink: React.FC<Props> = ({ to, children, mr, ml }) => {
  return (
    <Link
      href={to}
      color={"#023E7D"}
      width={24}
      height={24}
      mr={mr && mr}
      ml={ml && ml}
      sx={{
        transition: "all 0.1s ease-in-out ",
        "&:hover": {
          color: "#0180ff",
        },
      }}>
      {children}
    </Link>
  );
};

export default IconLink;
