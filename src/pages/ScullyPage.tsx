import { Box, Divider, Typography } from "@mui/joy";
import PageSkeleton from "../components/PageSkeleton";
import ImageCard from "../components/ImageCard";

import {
  asleep,
  at_the_airport,
  bike_investigation,
  birthday_cat_tree,
  bott_and_tu,
  brave,
  creature,
  dinner_is_served,
  first_day_home_from_the_shelter,
  heart,
  hello,
  igloo,
  in_a_box,
  in_the_sheets,
  lacan,
  loaf,
  lumpy,
  measure_theory,
  media_literacy,
  mondays,
  photo_bomb,
  reaching,
  sniff_inspector,
  tasty_blanket,
  the_lamp,
  up_close_and_personal,
  upside_down,
  you_ve_got_mail,
} from "../assets/pictures/scully";

const ScullyPage = () => {
  const images = [
    { image: hello, caption: "Hello" },
    { image: loaf, caption: "Loaf" },
    { image: in_a_box, caption: "In a box" },
    {
      image: first_day_home_from_the_shelter,
      caption: "First day home from the shelter",
    },
    { image: bott_and_tu, caption: "Bott and Tu" },
    { image: upside_down, caption: "Upside down" },
    { image: mondays, caption: "Mondays..." },
    { image: tasty_blanket, caption: "Tasty blanket" },
    { image: sniff_inspector, caption: "Sniff Inspector!" },
    { image: media_literacy, caption: "Media literacy" },
    { image: bike_investigation, caption: "Bike investigation" },
    { image: up_close_and_personal, caption: "Up close and personal" },
    { image: at_the_airport, caption: "At the airport" },
    { image: in_the_sheets, caption: "In the sheets" },
    { image: lumpy, caption: "Lumpy" },
    { image: asleep, caption: "Asleep" },
    { image: igloo, caption: "Igloo" },
    { image: the_lamp, caption: "The lamp" },
    { image: measure_theory, caption: "Measure theory" },
    { image: photo_bomb, caption: "Photo bomb" },
    { image: reaching, caption: "Reaching" },
    { image: lacan, caption: "Lacan" },
    { image: you_ve_got_mail, caption: "You've got mail!" },
    { image: creature, caption: "Creature" },
    { image: birthday_cat_tree, caption: "Birthday cat tree" },
    { image: heart, caption: "<3" },
    { image: brave, caption: "Brave" },
    { image: dinner_is_served, caption: "Dinner is served." },
  ];

  return (
    <PageSkeleton includeBannerImage={false}>
      <Typography level='h2' my={2}>
        Scully Gallery
      </Typography>
      <Typography level='body-sm' textColor='black' mb={2}>
        Congratulations! You've found the hidden Scully gallery. Scully is my
        cat. Her birthday is May 31st, 2023.
      </Typography>

      <Divider />

      <Box
        width='span'
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='space-between'
        gap={2}
        my={4}
      >
        {images.map((img) => (
          <ImageCard image={img.image} caption={img.caption} />
        ))}
      </Box>
    </PageSkeleton>
  );
};

export default ScullyPage;
