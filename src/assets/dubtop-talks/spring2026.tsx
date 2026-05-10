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
        present Voevodsky's norm residue theorem. I will briefly explain its
        relationship to the Lichtenbaum--Quillen conjecture. As an application,
        I will discuss the computation of the motivic cohomology of a point over
        real closed fields and present a small recent result of my own in this
        direction.
      </>
    }
    speakerWebsite="https://kclo3-naoh.github.io/"
  />,
  <DubTopTalkItem
    speaker="Ting Gong"
    title="A formal talk"
    date="April 24"
    abstract={
      <>
        In this talk, I will introduce formal groups and explain some of the
        reasons they are important in algebraic geometry, topology, number
        theory, and representation theory. I will discuss their role in the
        origins of chromatic homotopy theory, and also say something about
        Artin--Mazur formal groups from algebraic geometry. If time permits, I
        will briefly mention topological modular forms.
      </>
    }
    speakerWebsite="https://sites.google.com/view/tinggong"
  />,
  <DubTopTalkItem
    speaker="Jackson Morris"
    title={
      <>
        Higher real <Math tex={String.raw`K`} />
        -theories, redshift, and blueshift
      </>
    }
    date="May 1 & May 8"
    abstract={
      <>
        The <Math tex={String.raw`K(n)`} />
        -local sphere is a fundamental object of interest in chromatic homotopy
        theory. One may access this object by Galois descent from its separable
        closure, the Lubin-Tate spectrum of height <Math
          tex={String.raw`n`}
        />{" "}
        attached to the Honda formal group law. However, as the Galois group{" "}
        <Math tex={String.raw`\mathbb{G}_n`} /> is a large{" "}
        <Math tex={String.raw`p`} />
        -adic Lie group, this is not very practical. An easier task is to
        approximate the <Math tex={String.raw`K(n)`} />
        -local sphere by descent along finite subgroups of{" "}
        <Math tex={String.raw`\mathbb{G}_n`} />. The resulting homotopy fixed
        points are known as higher real <Math tex={String.raw`K`} />
        -theories, and they are among the most important and well-studied
        spectra we have at our disposal.
        <br />
        In this series of talks I will discuss the role that higher real{" "}
        <Math tex={String.raw`K`} />
        -theories play in chromatic homotopy theory. In talk 1, I will introduce
        the main characters and landscape and mention tools for computation. In
        talk 2, I will introduce redshift in algebraic{" "}
        <Math tex={String.raw`K`} />
        -theory and blueshift in Tate fixed points for higher real{" "}
        <Math tex={String.raw`K`} />
        -theories.
      </>
    }
    speakerWebsite="https://jackson-morris.github.io/"
  />,
  <DubTopTalkItem
    speaker="Jay Reiter"
    title="Toward chromatic Galois purity"
    date="May 15"
    abstract={
      <>
        The Zariski--Nagata purity theorem states that the Galois group of a
        scheme is invariant under deletion of a closed subscheme of codimension
        at least 2. A conjecture of Mathew suggests that a similar phenomenon
        occurs for chromatically-localized{" "}
        <Math tex={String.raw`\mathbb{E}_\infty`} />
        -rings, namely that the map <Math tex={String.raw`L_nR\to L_1R`} /> is
        an equivalence on Galois groups. If <Math tex={String.raw`R`} /> is
        Landweber exact, this follows from the fact that{" "}
        <Math tex={String.raw`L_1`} />
        -localization behaves like restriction to the open substack{" "}
        <Math
          tex={String.raw`\mathcal{M}_\mathrm{fg}^{\leq1}\hookrightarrow\mathcal{M}_\mathrm{fg}`}
        />
        , whose compliment, defined by the ideal{" "}
        <Math tex={String.raw`(p,v_1)`} />, has codimension 2. The case of the{" "}
        <Math tex={String.raw`E_n`} />
        -local sphere then follows from the fact that the map{" "}
        <Math tex={String.raw`L_n\mathbb{S}\to E_n`} /> is descendable. In this
        talk, I'll introduce Mathew's theory of Galois groups of 2-rings and
        descendability, and discuss some thoughts I've been having about how
        techniques from the proof of the chromatic Nullstellensatz may apply to
        this conjecture. This will probably include some high-level discussion
        of the spherical Witt vector / tilt adjunction,{" "}
        <Math tex={String.raw`T(n)`} />
        -local homotopy, and the process of constructing maps to Lubin--Tate
        theories which detect nilpotence.
      </>
    }
    speakerWebsite="https://jay-reiter.github.io/"
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
