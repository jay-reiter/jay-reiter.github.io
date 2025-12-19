import { Box, Link, Typography } from "@mui/joy";
import { ReactElement } from "react";

interface DubTopTalkItemProps {
  speaker: string;
  title: string | ReactElement;
  date: string;
  abstract: string | ReactElement;
  speakerWebsite?: string;
}

const DubTopTalkItem = ({
  speaker,
  title,
  date,
  abstract,
  speakerWebsite,
}: DubTopTalkItemProps) => {
  const dateWidth = 0.15;

  return (
    <Box display='flex' flexDirection='column' mb={4}>
      <Box display='flex' flexDirection='row' width='span'>
        <Box
          width={dateWidth}
          height='span'
          display='flex'
          alignItems='flex-end'
          justifyContent='flex-start'
          fontStyle='italic'
        >
          <Typography level='h4' fontSize='md' fontWeight='300' color='primary'>
            {date}
          </Typography>
        </Box>
        <Box
          width={1 - dateWidth}
          height='span'
          display='flex'
          alignItems='flex-end'
          justifyContent='flex-start'
        >
          <Typography level='h3' fontSize='xl' fontWeight='300' color='primary'>
            {speakerWebsite ? (
              <Link
                href={speakerWebsite}
                underline='always'
                target='_blank'
                rel='noopener noreferrer'
              >
                {speaker}
              </Link>
            ) : (
              speaker
            )}
          </Typography>
        </Box>
      </Box>
      <Box display='flex' flexDirection='row' width='span'>
        <Box width={dateWidth}></Box>
        <Box width={1 - dateWidth}>
          <Typography level='title-sm' fontWeight='800' fontStyle='italic'>
            {title}
          </Typography>
          <Typography level='body-sm' textColor='black'>
            {abstract}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DubTopTalkItem;
