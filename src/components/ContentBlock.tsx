import { Box, Divider } from "@mui/joy";

type ContentBlockProps = {
  children?: React.ReactNode;
};

const ContentBlock = ({ children }: ContentBlockProps) => {
  return (
    <Box width={1} my={3} display="flex" flexDirection="column" justifyContent='center' alignItems="center">
      <Box width={0.8} mb={6} >
        {children}
      </Box>
      <Divider />
    </Box>
  );
};

export default ContentBlock;
