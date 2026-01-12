import { MathComponent } from "mathjax-react";
import DubTopTalkItem from "../../components/DubTopTalkItem";
import { Link } from "@mui/joy";
import { ReactElement } from "react";

const talks: ReactElement[] = [
  <DubTopTalkItem
    speaker='Jackson Morris'
    title={<>TBA</>}
    abstract={<>TBA</>}
    date='January 16'
    speakerWebsite='https://sites.google.com/view/jacksonmorris/home'
  />,
  <DubTopTalkItem
    speaker='Daniel Rostamloo'
    title='TBA'
    date='January 23'
    abstract={<>TBA</>}
    speakerWebsite='https://theprismatic.site'
  />,
];

export default talks;
