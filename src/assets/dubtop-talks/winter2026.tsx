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
    title='Geometrization'
    date='January 23'
    abstract={<>Motivated by the work of Simpson in the 90s, many recent advances in modern arithmetic geometry have been made by reinterpreting the cohomology of an object as the sheaf cohomology on a certain stack associated to the object. I will explain this process and how it geometrizes the additional data of filtrations on certain cohomology theories, making the derived category of the stack a natural candidate for a category of motives over the object.</>}
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
