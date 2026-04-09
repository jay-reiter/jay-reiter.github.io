import { MathComponent } from "mathjax-react";
import DubTopTalkItem from "../../components/DubTopTalkItem";
import Math from "../../components/Math";
import { ReactElement } from "react";

const talks: ReactElement[] = [
  <DubTopTalkItem
    speaker="Albert Jinghui Yang"
    title="The norm residue theorem and applications"
    date="April 10"
    abstract={
      <>
        The celebrated Milnor conjecture establishes a deep connection between
        Milnor <Math tex={String.raw`K`} />
        -theory and Galois cohomology of a field <Math tex={String.raw`k`} />,
        which in this case can be identified with étale cohomology. Its proof by
        Voevodsky, via the introduction of motivic cohomology, marked a
        foundational development in motivic homotopy theory. As a consequence,
        it also provides a key step toward the Lichtenbaum--Quillen conjecture.
        In this talk, I will begin by introducing étale cohomology and then
        present Voevodsky’s norm residue theorem. I will briefly explain its
        relationship to the Lichtenbaum--Quillen conjecture. As an application,
        I will discuss the computation of the motivic cohomology of a point over
        real closed fields and present a small recent result of my own in this
        direction.
      </>
    }
    speakerWebsite="https://kclo3-naoh.github.io/"
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="April 17"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="April 24"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="May 1"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="May 8"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="May 15"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="May 22"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="May 29"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
  <DubTopTalkItem
    speaker="TBA"
    title="TBA"
    date="June 5"
    abstract={<>TBA</>}
    speakerWebsite=""
  />,
];

export default talks;
