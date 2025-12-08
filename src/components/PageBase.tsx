import { Box, Container } from "@mui/material";
import NavBar from "./NavBar.tsx";
import React from "react";

import mtrainier from "../assets/mt-rainier.png";

type PageBaseProps = {
  children?: React.ReactNode;
};

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <Container sx={{ width: 1 }}>
      <Box
        sx={{
          width: 1,
          height: 0.4,
        }}
        component='img'
        src={mtrainier}
      />
      <NavBar />
      <Box sx={{ width: 0.75 }}>{children}</Box>
    </Container>
  );
};

export default PageBase;
