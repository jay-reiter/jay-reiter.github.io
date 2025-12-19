import { Box, Link, Typography } from "@mui/joy";
import React from "react";

interface WritingItemProps {
  title: string | React.ReactElement;
  path: string;
  date: string;
  children?: React.ReactNode;
}

const WritingItem = ({ title, path, date, children }: WritingItemProps) => {
  return (
    <Box my={3}>
      <Typography level='title-sm' fontStyle='italic'>
        <Typography fontWeight='800'>
          <Link href={path} underline='always' target='_blank' rel='noreferrer'>
            {title}
          </Link>
        </Typography>
        <Typography fontWeight='400'> -- {date}</Typography>
      </Typography>

      <Typography level='body-sm' textColor='black'>
        {children}
      </Typography>
    </Box>
  );
};

export default WritingItem;
