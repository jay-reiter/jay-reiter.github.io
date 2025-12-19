import { Link, Typography } from "@mui/joy";
import React from "react";

interface TalkItemProps {
  title: string | React.ReactElement;
  date: string;
  seminar: string;
  link?: string;
}

const TalkItem = ({ title, date, seminar, link }: TalkItemProps) => {
  return (
    <Typography level='body-sm' textColor='black' display='inline'>
      "{title}" --{" "}
      <Link
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        underline='always'
      >
        <Typography color='primary'>
          {seminar}, {date}
        </Typography>
      </Link>
    </Typography>
  );
};

export default TalkItem;
