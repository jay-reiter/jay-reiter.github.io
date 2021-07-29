import ResearchElement from "../research/ResearchElement";
import React from "react";
import { Box, Typography } from "@material-ui/core";
import { MathComponent } from "mathjax-react";
import theme from "../theme/theme";

const PadicVisualization = () => {
  return (
    <>
      <ResearchElement title={"P-Adic Visualization in C++"} />
      <Box display="flex">
        <Box
          p={2}
          m={0.5}
          bgcolor={theme.palette.secondary.main}
          display="flex"
          flexDirection="column"
        >
          <img src="https://github.com/jay-reiter/p-adic-power-series-visualization/blob/master/visuals/exp__low_res.gif?raw=true" />
          <Box>
            <MathComponent
              tex={String.raw`\exp:7 \mathbb{Z}_7 \to \mathbb{Z}_7`}
            />
            <Typography>
              Animation of the p-adic exponential function, exp (pink). The
              function is a strictly increasing isomorphism of groups.
            </Typography>
          </Box>
        </Box>
        <Box
          p={2}
          m={0.5}
          bgcolor={theme.palette.secondary.main}
          display="flex"
          flexDirection="column"
        >
          <img src="https://github.com/jay-reiter/p-adic-power-series-visualization/blob/master/visuals/sin_cos__low_res.gif?raw=true" />
          <Box>
            <MathComponent
              tex={String.raw`\sin , \cos:7 \mathbb{Z}_7 \to \mathbb{Z}_7`}
            />
            <Typography>
              Animation of the p-adic sin (blue) and cos (pink) functions. Note
              how closely sin approximates x (green) and cos approximates x+1.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box m={2}>
        <Typography variant="h5">Motivation:</Typography>
        <Typography>The p-adic numbers</Typography>
      </Box>
    </>
  );
};

export default PadicVisualization;
