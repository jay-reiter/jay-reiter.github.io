import { Box, Divider, Stack, Typography } from "@mui/material";
import PageBase from "../components/PageBase";

import picOfMe from "../assets/pic-of-me.png";

const HomePage = () => {
  return (
    <PageBase>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: 0.7, flexGrow: 2.5 }}>
          <Typography>This is the home page</Typography>
          <Typography>And here is more homepage</Typography>
          <Typography>And here is even more homepage</Typography>

          <Divider />
        </Box>
        <Stack direction='column'>
          <Box component='img' src={picOfMe} />
          <Typography>Me and my cat, Scully.</Typography>
        </Stack>
      </Box>
    </PageBase>
  );
};

export default HomePage;
