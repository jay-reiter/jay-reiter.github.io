import { Box, Typography } from "@mui/joy";
import PageSkeleton from "../../components/PageSkeleton";
import ContentBlock from "../../components/ContentBlock";

import talks from "../../assets/dubtop-talks/spring2026";
import { ReactElement } from "react";
import { MathComponent } from "mathjax-react";

const DubTopSpring2026 = () => {
  return (
    <PageSkeleton>
      <ContentBlock>
        <Typography color="primary" display="inline" mb={4}>
          <Typography textColor="inherit" level="h1" fontWeight="650">
            DubTop
          </Typography>
          <Typography textColor="inherit" level="h3" fontWeight="450" ml={2}>
            Spring 2026
          </Typography>
        </Typography>
        <Typography level="body-sm" textColor="black" my={2}>
          DubTop is the graduate student topology and homotopy theory seminar at
          UW. We take turns giving talks on topics of our choosing within a
          selected topic for the quarter. This quarter---since it's several
          people's last DubTop before graduating and interest is higher than
          ever---it was tough to settle on just one topic. As a result, the
          theme(s) for DubTop this quarter is (are){" "}
          <Typography fontWeight="800" display="inline">
            <Typography textColor="red">redshift</Typography> and algebraic{" "}
            <MathComponent tex={String.raw`K`} display={false} />
            -theory
          </Typography>
          , as well as{" "}
          <Typography fontWeight="800" display="inline">
            <MathComponent tex={String.raw`T(n)`} display={false} />
            -local homotopy theory
          </Typography>
          , and with an "honorable mention" topic of{" "}
          <Typography fontWeight="800" display="inline">
            motivic cohomology
          </Typography>
          .
        </Typography>
        <Typography level="body-sm" textColor="black" gutterBottom>
          At long last, we are back in Padelford this quarter! We'll be meeting{" "}
          <Typography fontWeight="800" display="inline">
            Fridays 1:30 - 2:30 in PDL C-401
          </Typography>
          .
        </Typography>

        <Typography color="primary" level="h3" fontWeight="500" mt={6} mb={3}>
          Scheduled Talks
        </Typography>
        <Box display="flex" flexDirection="column">
          {talks.map((talk: ReactElement) => talk)}
        </Box>
      </ContentBlock>
    </PageSkeleton>
  );
};

export default DubTopSpring2026;
