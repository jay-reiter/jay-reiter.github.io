import { Box, Typography } from "@mui/joy";

const Footer = () => {
  return (
    <Box display='flex' justifyContent='right' paddingX={3} paddingY={1}>
      {" "}
      <Typography level='body-xs' textColor='neutral.300'>
        Last updated Feb 13, 2026
      </Typography>
    </Box>
  );
};

export default Footer;
