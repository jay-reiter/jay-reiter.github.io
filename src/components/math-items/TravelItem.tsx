import { Typography } from "@mui/joy";

interface TravelItemProps {
  title: string;
  date: string;
  location: string;
}

const TravelItem = ({ title, date, location }: TravelItemProps) => {
  return (
    <>
      <Typography level='title-md' fontWeight='700' display='inline'>
        {title}
      </Typography>{" "}
      <Typography level='body-md' fontWeight='400' display='inline'>
        -- {location}, {date}
      </Typography>
    </>
  );
};

export default TravelItem;
