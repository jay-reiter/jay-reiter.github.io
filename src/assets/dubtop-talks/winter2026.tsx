import { MathComponent } from "mathjax-react";
import DubTopTalkItem from "../../components/DubTopTalkItem";
import { Link } from "@mui/joy";
import { ReactElement } from "react";

const talks: ReactElement[] = [
  <DubTopTalkItem
    speaker='Jackson Morris'
    title={<>Filtered objects, spectral sequences, and t-structures</>}
    abstract={
      <>
        A recent trend in homotopy theory has been the replacement of the phrase
        "There is a spectral sequence..." with "There is a filtration...". This
        talk is an entryway into this shift. We will begin by discussing
        motivation for studying filtrations as opposed to spectral sequences.
        Then, we will introduce filtered objects and t-structures on stable{" "}
        <MathComponent tex={String.raw`\infty`} display={false} />
        -categories. We will end by showing how two natural spectral sequences
        on a filtered object can be related.
      </>
    }
    date='January 16'
    speakerWebsite='https://jackson-morris.github.io/'
  />,
  <DubTopTalkItem
    speaker='Daniel Rostamloo'
    title='TBA'
    date='January 23'
    abstract={<>TBA</>}
    speakerWebsite='https://theprismatic.site'
  />,
  <DubTopTalkItem
    speaker='Albert Jinghui Yang'
    title='TBA'
    date='January 30'
    abstract={<>TBA</>}
    speakerWebsite='https://kclo3-naoh.github.io/'
  />,
  <DubTopTalkItem
    speaker='Manyi Guo'
    title='TBA'
    date='March 6'
    abstract={<>TBA</>}
    speakerWebsite='https://math.washington.edu/people/manyi-guo'
  />,
];

export default talks;
