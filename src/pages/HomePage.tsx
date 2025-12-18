import { Box, Typography, AspectRatio, Link } from "@mui/joy";
import PageBase from "../components/PageBase";

import picOfMe from "../assets/pictures/pic-of-me.png";
import ContentBlock from "../components/ContentBlock";
import { Link as RouterLink } from "react-router-dom";

const HomePage = () => {
  return (
    <PageBase>
      <ContentBlock>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{ maxWidth: 0.65, minWidth: 400, justifySelf: "flex-start" }}
          >
            <Box mb={1}>
              <Typography
                color='primary'
                level='h1'
                display='inline'
                fontWeight='650'
                gutterBottom
              >
                Jay Reiter
              </Typography>
              <Typography
                color='primary'
                level='h3'
                display='inline'
                fontWeight='450'
                gutterBottom
                style={{ marginLeft: 20 }}
              >
                (he/him)
              </Typography>
            </Box>
            <Typography level='body-md' mb={1.5}>
              I am a math Ph.D. student at the{" "}
              <Link href='https://math.washington.edu/' underline='hover'>
                University of Washington
              </Link>
              . My mathematical interests are in chromatic homotopy theory,
              synthetic spectra, and spectral algebraic geometry.
            </Typography>
            <Typography level='body-md' mb={1.5}>
              I received my B.S. in math and computer science from the
              University of Illinois Urbana Champaign in 2023.
            </Typography>
            <Typography level='body-md' mb={1.5}>
              My email is{" "}
              <Link href='mailto:jrreiter@uw.edu'>jrreiter@uw.edu</Link>, and my
              office is PDL C-543.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 0.25,
              minWidth: 200,
              alignItems: "flex-end",
              justifySelf: "flex-end",
            }}
          >
            <Box width={1} component='img' src={picOfMe} />

            <Typography level='body-md' mt={1} gutterBottom>
              Me and my cat,{" "}
              <RouterLink to='/scully'>
                <Link>Scully</Link>
              </RouterLink>
              .
            </Typography>
          </Box>
        </Box>
        <Typography level='body-md' gutterBottom>
          In fall 2025, I am organizing the UW graduate student topology
          seminar,{" "}
          <RouterLink to='/dubtop-fall-2025'>
            <Link>DubTop</Link>
          </RouterLink>
          .
        </Typography>
      </ContentBlock>
    </PageBase>
  );
};

export default HomePage;
