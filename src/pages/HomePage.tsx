import { Box, Divider, Stack, Typography } from "@mui/material";
import PageBase from "../components/PageBase";

import picOfMe from "../assets/pic-of-me.png";
import { Link } from "react-router-dom";
import { AspectRatio } from "@mui/joy";

const HomePage = () => {
  return (
    <PageBase>
      <Box width={0.8} justifySelf='center'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: 0.65 }}>
            <Box>
              <Typography variant='h2' display='inline' gutterBottom>
                Jay Reiter
              </Typography>
              <Typography
                variant='h4'
                display='inline'
                gutterBottom
                style={{ marginLeft: 20 }}
              >
                (they/he)
              </Typography>
            </Box>
            <Typography variant='body1' gutterBottom>
              I am a math Ph.D. student at the
              <Link to='https://math.washington.edu/'>
                University of Washington
              </Link>
              . My mathematical interests are in chromatic homotopy theory,
              synthetic spectra, and spectral algebraic geometry.
            </Typography>
            <Typography variant='body1' gutterBottom>
              I received my B.S. in math and computer science from the
              University of Illinois Urbana Champaign in 2023.
            </Typography>
            <Typography variant='body1' gutterBottom>
              My email is <Link to=''>jrreiter@uw.edu</Link>, and my office is
              PDL C-543.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 0.2,
              alignItems: "flex-end",
            }}
          >
            <Box width={250} height={250}>
              <AspectRatio objectFit='fill' minHeight={250}>
                <img src={picOfMe} />
              </AspectRatio>
            </Box>

            <Typography gutterBottom>
              Me and my cat, <Link to='/scully'>Scully</Link>.
            </Typography>
          </Box>
        </Box>
        <Typography variant='body1' gutterBottom>
          In fall 2025 I am organizing the UW graduate student topology seminar,{" "}
          <Link to='/dubtop-fall-2025'>DubTop</Link>.
        </Typography>
      </Box>
      <Divider />
    </PageBase>
  );
};

export default HomePage;
