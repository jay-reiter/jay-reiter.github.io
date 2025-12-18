import { Box, Typography, Divider } from "@mui/joy";

type ContentBlockProps = {
  title?: string;
  children?: React.ReactNode;
};

const ContentBlock: React.FC<ContentBlockProps> = ({ title, children }) => {
  return (
    <Box width={1} my={4} flexDirection='column' justifyContent='center'>
      <Box width={0.8} mb={6} justifySelf='center'>
        {children}
      </Box>
      <Divider />
    </Box>
  );
};

export default ContentBlock;
