import { Box, Grid, Typography, useTheme } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import ResumeCard from "./components/ResumeCard";

import react_logo from "./assets/pictures/react_logo.png";
import milkmap from "./assets/pictures/milkmap.png";
import milkmap_home from "./assets/pictures/milkmap_home.png";
import milkmap_map from "./assets/pictures/milkmap_map.png";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface SpecialLinkProps {
  title: string;
  target: string;
}

export const SpecialLink: React.FC<SpecialLinkProps> = ({ title, target }) => {
  const theme = useTheme();
  return (
    <Typography variant='button'>
      <a>
        <Link
          to={target}
          style={{
            color: theme.palette.primary.contrastText,
            fontSize: "16pt",
            cursor: "pointer",
          }}
        >
          <Box display='flex' alignItems='center'>
            {title}
            <ArrowForwardIcon />
          </Box>
        </Link>
      </a>
    </Typography>
  );
};

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <Box my={3} display='flex' justifyContent='center' flexDirection='column'>
        <Typography variant='h2' gutterBottom>
          Welcome To My Website!
        </Typography>
        <Box>
          <Alert
            severity='warning'
            style={{ marginBottom: "16px", width: "400px" }}
          >
            This website is a work in progress...
          </Alert>
          <Typography variant='body1'>
            I am constantly working to add all the content I want to share, but
            there's a lot to do, so not all the pages are currently filled out!
            Of course, if there's anything you want to know more about, I am
            more than happy to answer your questions!
          </Typography>
          <Box my={4}>
            <Typography variant='h5' gutterBottom>
              For now, here are some of the things I have to show off!
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ResumeCard
              title='P-Adic Visualization Library in C++'
              img={
                "https://github.com/jay-reiter/p-adic-power-series-visualization/blob/master/visuals/exp__low_res.gif?raw=true"
              }
              subtitle='My library for graphing p-adic power series'
              pageLinkPath='/code-projects/padic-visualization'
              startDate='March 2021'
              endDate='May 2021'
              // organization='cool club'
              externalLink='https://github.com/jay-reiter/p-adic-power-series-visualization'
              descriptionTitle='My C++ library for graphing p-adic power series'
              description={
                <>
                  This is a C++ library I wrote from the ground up to do
                  arithmetic with p-adic numbers, evaluate p-adic power series
                  to arbitrary precision, and then represent them graphically
                  (pictured above).
                  <br />
                  <br />
                  This started as a semester project for Math 496 at UIUC. My
                  research goal was to imitate the empirical and geometric
                  intuition we have for real-valued functions in the p-adics
                  numbers (a unique, counter-intuitive number system in modern
                  algebra).
                </>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ResumeCard
              title='This Website'
              img={react_logo}
              subtitle={`The website you're looking at now!`}
              startDate='June 2021'
              endDate='Present'
              descriptionTitle='About this site'
              description={
                <>
                  I decided to make this website to share some of the things
                  I've done that don't quite fit or belong on my resume.
                  Everything from big coding projects and research papers to
                  math problems I thought were cool, me playing cello, and
                  little JavaScript games I've built will be on here!
                  <br />
                  <br />I built this site using React, TypeScript, Material-UI,
                  and NEXT.js. It is currently being hosted using GitHub pages!
                  Of course, the best way to learn about what I've done with
                  this site is to have a look around!
                </>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ResumeCard
              title='Website for Breastfeeding Mothers in Illinois'
              img={milkmap}
              subtitle={``}
              startDate='June 2021'
              endDate='Present'
              descriptionTitle='What we are doing'
              description={
                <>
                  This is a project with Design for America UIUC and the
                  Illinois Public Health Insitute (IPHI) to build a website that
                  provides breastfeeding mothers in Illinois with a list of
                  accessible resources to help them both during pregnancy and in
                  the first year of parenting. Our focus is particularly on
                  marginalized groups of mothers such as mothers of color,
                  teenage mothers, and rural mothers, that may not have easy
                  access to the information, resources, or cultural support they
                  need to breastfeed their children healthfully and stress-free.
                  <br />
                  <br />
                  In Design for America, we employ <b>
                    human-centered design
                  </b>{" "}
                  thinking to create empathy based solutions to the problems we
                  approach. Based on interviews with mothers, doctors, and
                  breatfeeding experts, here are the how might we statements we
                  have generated so far:
                  <Box my={2}>
                    <Grid container justifyContent='space-around'>
                      <Grid
                        item
                        xs={5}
                        style={{
                          padding: "12px",
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: "8px",
                        }}
                      >
                        <b>How might we</b> provide personalized, specific
                        information to breastfeeding mothers in Illinois in an
                        accessible, empowering way in order to improve their
                        breastfeeding ease and personal health?
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        style={{
                          padding: "12px",
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: "8px",
                        }}
                      >
                        <b>How might we</b> connect breastfeeding mothers to
                        support resources (e.g. other mothers, support groups,
                        lactation consultants) in order to alleviate common
                        fears and boost self esteem?
                      </Grid>
                    </Grid>
                  </Box>
                  <Typography variant='h5'>
                    Here are some wire frames of the website we've created so
                    far:
                  </Typography>
                  <Box
                    display='flex'
                    py={2}
                    justifyContent='center'
                    width='100%'
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <img src={milkmap_home} width='100%' />
                      </Grid>
                      <Grid item xs={12}>
                        <img src={milkmap_map} width='100%' />
                      </Grid>
                    </Grid>
                  </Box>
                </>
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default HomePage;
