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
    title='Bott periodicity from algebraic geometry'
    date='February 27'
    abstract={<>We will explain the paper by Larson and Vakil on Bott periodicity from approximation by using algebraic geometric objects. In particular, we are going to discuss its relation to motivic homotopy theory and how the techniques of Larson and Vakil are supported in the algebraic topology setting. </>}
    speakerWebsite='https://sites.google.com/view/tinggong'
  />,
  <DubTopTalkItem
    speaker='Manyi Guo'
    title='Décalage'
    date='March 6'
    abstract={<>First introduced for chain complexes, Décalage “turns the page” of a spectral sequence and has since been generalized to cosimplicial
objects and filtered spectra. We start with a cosimplicial spectrum{" "}
<MathComponent tex={String.raw`X^\bullet`} display={false} /> and filter its totalization via levelwise connective
covers (equivalently, by totalizing the Whitehead tower), obtaining a
filtered spectrum whose <MathComponent tex={String.raw`\mathrm{Tot}`} display={false} /> spectral sequence is shifted forward:{" "}
<MathComponent tex={String.raw`E_r(\mathrm{D\acute ec}^\Delta X)\cong E_{r+1}(X^\bullet)`} display={false} />. I will outline
this construction, explain the page-shifting, and (if time permits)
discuss applications to comparisons of spectral sequences including
Adams–-Novikov and slice filtrations.</>}
    speakerWebsite='https://math.washington.edu/people/manyi-guo'
  />,
  <DubTopTalkItem
    speaker='Jay Reiter'
    title={<>Galois descent in algebraic <MathComponent tex={String.raw`\mathrm{K}`} display={false} />-theory</>}
    date='March 13'
    abstract={<>The Lichtenbaum--Quillen conjecture concerns the convergence of a motivic spectral sequence that begins with the étale cohomology of a variety and abuts to its algebraic <MathComponent tex={String.raw`\mathrm{K}`} display={false} />-theory. In the 80's, Thomason showed that after rationalization, algebraic <MathComponent tex={String.raw`\mathrm{K}`} display={false} />-theory is a sheaf for the étale topology, and so rationally, the motivic spectral sequence is nothing more than an étale descent spectral sequence. For a while, it was known that the obstruction to <MathComponent tex={String.raw`\mathrm{K}`} display={false} /> being an étale sheaf is its failure to satisfy Galois descent. Using a general theory of descendability and "deformations of descendable objects," Clausen--Mathew--Naumann--Noel extend Thomason's result to show that <MathComponent tex={String.raw`\mathrm{K}`} display={false} /> satisfies Galois descent after localization at the mapping telescope <MathComponent tex={String.raw`\mathrm{T}(n)`} display={false} /> of a type-<MathComponent tex={String.raw`n`} display={false} /> spectrum for any <MathComponent tex={String.raw`n`} display={false} />. In this talk, we'll give an overview of their techniques, and (time permitting) outline how Yuan uses this result to give a formal proof of chromatic redshift for Morava <MathComponent tex={String.raw`\mathrm{E}`} display={false} />-theory</>}
    speakerWebsite='https://jay-reiter.github.io'
  />
];

export default talks;
