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
    title='The Bousfield--Kan spectral sequence'
    date='January 30'
    abstract={<>In this talk, I will discuss the construction of a spectral sequence known as the Bousfield–-Kan spectral sequence (BKSS). As an example, I will briefly introduce an important tool (my favorite one!) called the descent spectral sequence, which is a variant of the BKSS used in computations of <MathComponent tex={String.raw`\mathrm{THH}`} display={false} /> (topological Hochschild homology) of local fields. Using this technique, I will outline the idea behind the computation of <MathComponent tex={String.raw`\mathrm{THH}`} display={false} /> of local fields without carrying out the full calculation. No background in <MathComponent tex={String.raw`\mathrm{THH}`} display={false} /> will be assumed.</>}
    speakerWebsite='https://kclo3-naoh.github.io/'
  />,
  <DubTopTalkItem
    speaker='Ting Gong'
    title='TBA'
    date='February 27'
    abstract={<>TBA</>}
    speakerWebsite='https://sites.google.com/view/tinggong'
  />,
  <DubTopTalkItem
    speaker='Manyi Guo'
    title='TBA'
    date='March 6'
    abstract={<>TBA</>}
    speakerWebsite='https://math.washington.edu/people/manyi-guo'
  />,
  <DubTopTalkItem
    speaker='Jay Reiter'
    title='TBA'
    date='March 13'
    abstract={<>TBA</>}
    speakerWebsite='https://jay-reiter.github.io'
  />
];

export default talks;
