import React from "react";
import { Box, Grid } from "@mui/material";
import { AspectRatio } from "@mui/joy";

import NavBar from "./NavBar.tsx";

import mtrainier from "../assets/mt-rainier.png";

type PageBaseProps = {
  children?: React.ReactNode;
};

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <Grid
      maxWidth={1}
      container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box width={1} position='relative'>
        <AspectRatio objectFit='cover' minHeight={300} maxHeight={300}>
          <img src={mtrainier} />
        </AspectRatio>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(255, 255, 255, 0.5)",
          }}
        />
      </Box>

      <Box width={0.8} alignSelf='center'>
        <NavBar />
        {children}
      </Box>
    </Grid>
  );
};

export default PageBase;
