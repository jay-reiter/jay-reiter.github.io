import React from "react";
import { Box, Grid } from "@mui/material";
import { AspectRatio } from "@mui/joy";

import { NavBar, Footer } from "../components";

import mtrainier from "../assets/pictures/mt-rainier.png";

type PageBaseProps = {
  includeBannerImage?: boolean;
  children?: React.ReactNode;
};

const PageSkeleton: React.FC<PageBaseProps> = ({
  includeBannerImage = true,
  children,
}) => {
  return (
    <>
      <Grid
        maxWidth={1}
        container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {includeBannerImage && (
          <Box width='span' position='relative'>
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
        )}

        <Box width={0.9} alignSelf='center'>
          <Box
            alignSelf='center'
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <NavBar />
            <Box width={0.85} alignItems='center'>
              {children}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Box width={1} position='fixed' bottom={0}>
        <Footer />
      </Box>
    </>
  );
};

export default PageSkeleton;
