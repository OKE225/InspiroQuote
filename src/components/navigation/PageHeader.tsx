import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  children: React.ReactNode;
};

const PageHeader: React.FC<Props> = ({ children }) => {
  return (
    <Typography
      variant="h5"
      color="#0071E1"
      position={"absolute"}
      left={15}
      top={10}>
      {children}
    </Typography>
  );
};

export default PageHeader;
