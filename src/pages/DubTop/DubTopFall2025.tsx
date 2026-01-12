import { Box, Typography } from "@mui/joy";
import PageSkeleton from "../../components/PageSkeleton";
import ContentBlock from "../../components/ContentBlock";

import talks from "../../assets/dubtop-talks/fall2025";
import { ReactElement } from "react";

const DubTopFall2025 = () => {
  return (
    <PageSkeleton>
      <ContentBlock>
        <Typography color='primary' display='inline' mb={4}>
          <Typography textColor='inherit' level='h1' fontWeight='650'>
            DubTop
          </Typography>
          <Typography textColor='inherit' level='h3' fontWeight='450' ml={2}>
            Fall 2025
          </Typography>
        </Typography>
        <Typography level='body-sm' textColor='black' my={2}>
          DubTop is the graduate student topology and homotopy theory seminar at
          UW. We take turns giving talks on topics of our choosing within a
          selected theme for the quarter. This quarter, the theme is{" "}
          <Typography fontWeight='800' display='inline'>
            Synthetic Spectra
          </Typography>
          . To broaden appeal, we welcome occasional talks on other unrelated
          topics if there are speakers interested in giving them!
        </Typography>
        <Typography level='body-sm' textColor='black' gutterBottom>
          We are meeting{" "}
          <Typography fontWeight='800' display='inline'>
            Fridays 1:30 - 2:30 in Thomson Hall (THO) 325
          </Typography>
          .
        </Typography>

        <Typography color='primary' level='h3' fontWeight='500' mt={6} mb={3}>
          Scheduled Talks
        </Typography>
        <Box display='flex' flexDirection='column'>
          {talks.map((talk: ReactElement) => talk)}
        </Box>
      </ContentBlock>
    </PageSkeleton>
  );
};

export default DubTopFall2025;
