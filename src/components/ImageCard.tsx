import { Box, Typography } from "@mui/joy";

interface ImageCardProps {
  image: string;
  caption: string;
}

const ImageCard = ({ image, caption }: ImageCardProps) => {
  return (
    <Box display='flex' flexDirection='column' alignContent='center'>
      <Box width={1} component='img' src={image} height='250px' />
      <Box width='span' textAlign='center' my={1}>
        <Typography level='body-sm'>{caption}</Typography>
      </Box>
    </Box>
  );
};

export default ImageCard;
