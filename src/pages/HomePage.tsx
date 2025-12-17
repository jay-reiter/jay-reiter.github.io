import { Box, Typography, AspectRatio, Link } from "@mui/joy";
import PageBase from "../components/PageBase";

import picOfMe from "../assets/pic-of-me.png";

const HomePage = () => {
  return (
    <PageBase>
      <Box justifySelf='center'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: 0.65 }}>
            <Box>
              <Typography
                color='primary'
                level='h1'
                display='inline'
                gutterBottom
              >
                Jay Reiter
              </Typography>
              <Typography
                color='primary'
                level='h4'
                display='inline'
                gutterBottom
                style={{ marginLeft: 20 }}
              >
                (he/him)
              </Typography>
            </Box>
            <Typography level='body-md' gutterBottom>
              I am a math Ph.D. student at the{" "}
              <Link href='https://math.washington.edu/' underline='hover'>
                University of Washington
              </Link>
              . My mathematical interests are in chromatic homotopy theory,
              synthetic spectra, and spectral algebraic geometry.
            </Typography>
            <Typography level='body-md' gutterBottom>
              I received my B.S. in math and computer science from the
              University of Illinois Urbana Champaign in 2023.
            </Typography>
            <Typography level='body-md' gutterBottom>
              My email is{" "}
              <Link href='mailto:jrreiter@uw.edu'>jrreiter@uw.edu</Link>, and my
              office is PDL C-543.
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
              Me and my cat, <Link href='/scully'>Scully</Link>.
            </Typography>
          </Box>
        </Box>
        <Typography level='body-md' gutterBottom>
          In fall 2025 I am organizing the UW graduate student topology seminar,{" "}
          <Link href='/dubtop-fall-2025'>DubTop</Link>.
        </Typography>
      </Box>
    </PageBase>
  );
};

export default HomePage;
