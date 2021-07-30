import ResearchElement from "../research/ResearchElement";
import React from "react";
import { Box, List, ListItem, Typography } from "@material-ui/core";
import { MathComponent } from "mathjax-react";
import theme from "../theme/theme";

const PadicVisualization = () => {
  return (
    <>
      <ResearchElement title={"P-Adic Visualization in C++"} />
      <Box display='flex'>
        <Box
          p={2}
          m={0.5}
          bgcolor={theme.palette.secondary.main}
          borderRadius='8px'
          display='flex'
          flexDirection='column'
        >
          <img src='https://github.com/jay-reiter/p-adic-power-series-visualization/blob/master/visuals/exp__low_res.gif?raw=true' />
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
          borderRadius='8px'
          display='flex'
          flexDirection='column'
        >
          <img src='https://github.com/jay-reiter/p-adic-power-series-visualization/blob/master/visuals/sin_cos__low_res.gif?raw=true' />
          <Box>
            <MathComponent
              tex={String.raw`\sin , \cos:7 \mathbb{Z}_7 \to \mathbb{Z}_7`}
            />
            <Typography>
              Animation of the p-adic sin (blue) and cos (pink) functions. Note
              how closely x (green) approximates sin(x) and how cos(x) stays to
              the 7^2Z7 coset.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box m={2}>
        <Typography variant='h5'>The Library</Typography>
        <Typography>
          This is a C++ library I wrote from the ground up to do arithmetic with
          p-adic numbers, evaluate p-adic power series to arbitrary precision,
          and then represent them graphically (pictured above). My motivation is
          to replicate the empirical and geometric intuition we have for
          real-valued functions in the p-adics.
        </Typography>
      </Box>
      <Box m={2}>
        <Typography variant='h6'>p-adic Arithmetic:</Typography>
        <Typography>
          The library introduces a p-adic datatype that supports addition,
          subtraction, multiplication, additive inverses, and multiplicative
          inverses, all to arbitrary precision. I wrote the algorithm for
          computing multiplicative inverses myself--it is done to n digits of
          accuracy in O(n) time. Below are some sample computations:
        </Typography>
        <img
          src='../assets/pictures/p-adic-sample-computations.png'
          alt='p-adic sample computations'
        />
      </Box>
      <Box m={2}>
        <Typography variant='h6'>Power Series Evaluation</Typography>
        <Typography>
          The library can evaluate any p-adic power series at any point; the
          user just supplies a callback function for the coefficients and a
          point to evaluate. This is done to a specified number of digits of
          accuracy. For exp(x), the evaluation to n digits of accuracy is done
          in O(n^3) time.
        </Typography>
      </Box>
    </>
  );
};

export default PadicVisualization;
