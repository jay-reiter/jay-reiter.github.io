import { Box, Divider } from "@mui/joy";

type ContentBlockProps = {
  children?: React.ReactNode;
};

const ContentBlock = ({ children }: ContentBlockProps) => {
  return (
    <Box width={1} my={3} flexDirection='column' justifyContent='center'>
      <Box width={0.8} mb={6} justifySelf='center'>
        {children}
      </Box>
      <Divider />
    </Box>
  );
};

export default ContentBlock;
