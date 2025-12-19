import { Typography } from "@mui/joy";

interface TravelItemProps {
  title: string;
  date: string;
  location: string;
}

const TravelItem = ({ title, date, location }: TravelItemProps) => {
  return (
    <>
      <Typography level='title-sm' fontWeight='800' display='inline'>
        {title}
      </Typography>{" "}
      <Typography
        level='body-sm'
        textColor='black'
        fontWeight='400'
        display='inline'
      >
        -- {location}, {date}
      </Typography>
    </>
  );
};

export default TravelItem;
