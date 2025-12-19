import { Box, Link, Typography } from "@mui/joy";
import PageSkeleton from "../components/PageSkeleton";
import ContentBlock from "../components/ContentBlock";
import DubTopTalkItem from "../components/DubTopTalkItem";
import { MathComponent } from "mathjax-react";

const DubTopFall2025 = () => {
  const talks = [
    <DubTopTalkItem
      speaker='Jay Reiter'
      title={
        <>
          Deformations of stable{" "}
          <MathComponent tex={String.raw`\infty`} display={false} />
          -categories
        </>
      }
      date='October 10'
      abstract={
        <>
          To a stable <MathComponent tex={String.raw`\infty`} display={false} />
          -category <MathComponent tex={String.raw`C`} display={false} />{" "}
          equipped with a well-behaved homology functor to an abelian category{" "}
          <MathComponent tex={String.raw`A`} display={false} />,
          Patchkoria--Pstrągowski associate a derived category which, in a
          precise sense, interpolates between mapping objects in{" "}
          <MathComponent tex={String.raw`C`} display={false} /> and Adams
          spectral sequences in{" "}
          <MathComponent tex={String.raw`A`} display={false} /> abutting to
          them. In this talk, we will begin by showing how this derived category
          arises naturally when trying to categorify Adams resolutions of
          spectra and then take a close look at its construction which
          axiomatizes the deformation-theoretic ideas behind synthetic spectra.
          As applications, we will catch a glimpse of a few very strong
          algebraicity results--that is, results identifying stable{" "}
          <MathComponent tex={String.raw`\infty`} display={false} />
          -categories of interest with the derived categories of certain abelian
          categories.
        </>
      }
      speakerWebsite='https://jay-reiter.github.io'
    />,
    <DubTopTalkItem
      speaker='Albert Jinghui Yang'
      title='Motivic classifying spaces'
      date='October 17'
      abstract={
        <>
          The integral Hodge conjecture was famously disproved by Atiyah and
          Hirzebruch, who found a counterexample in the cohomology of the
          classifying space of a certain finite group. Following a question
          proposed by Totaro in his 2014 book, it is natural to ask whether
          analogous phenomena occur in the motivic setting. In this talk, I will
          study motivic classifying spaces in richer motivic cohomology
          theories, including algebraic{" "}
          <MathComponent tex={String.raw`K`} display={false} />
          -theory and hermitian{" "}
          <MathComponent tex={String.raw`K`} display={false} />
          -theory. This is joint work with Prerna Dhankhar, Rebecca Field, Arjun
          Nigam, and J.D. Quigley.
        </>
      }
      speakerWebsite='https://kclo3-naoh.github.io/'
    />,
    <DubTopTalkItem
      speaker='Daniel Rostamloo'
      title='Topological structures in derived algebraic geometry'
      date='November 7'
      abstract={
        <>
          In the past decade, several major advances in{" "}
          <MathComponent tex={String.raw`p`} display={false} />
          -adic cohomology theory have ushered in a multitude of new questions
          and applications across homotopy theory, number theory, and algebraic
          geometry (extending even to birational geometry). At the heart of
          these developments is an elegant derived approach which has been
          essential for the discovery of new unifying theories. In this talk, I
          will give a survey of the language and objects involved in this
          beautiful story with a view toward the Hochschild--Kostant--Rosenberg
          theorem, a deep result connecting homotopy theory and de Rham
          cohomology.
        </>
      }
      speakerWebsite='https://theprismatic.site'
    />,
    <DubTopTalkItem
      speaker='Manyi Guo'
      title='Suynthetic Toda brackets'
      abstract='In this talk I will explain how and why Toda brackets admit controllable bounds on their Adams filtration when considered in the synthetic setting. This control may seem subtle: one must keep track not only of the Adams filtrations of the maps, but also of the Adams filtrations of the requisite homotopies. The category of synthetic spectra provides exactly the right tool to organize this tracking. The synthetic version of Toda brackets also gives a refined understanding of “crossing differentials” as well as capturing the Adams filtration of the corresponding classical Toda brackets in the ordinary stable category. If time permits, I will also discuss examples from the work of Burklund--Hahn--Senger and of Lin--Wang--Xu.'
      date='November 14'
    />,
    <DubTopTalkItem
      speaker='Jackson Morris'
      title={
        <>
          (A synthetic approach to detecting){" "}
          <MathComponent tex={String.raw`v_1`} display={false} />
          -periodic families
        </>
      }
      abstract={
        <>
          The stable homotopy groups of spheres are hard to calculate. Chromatic
          homotopy theory offers an organizational principle to sort the
          elements of these groups into periodic layers. Adams constructed the
          first infinite family of{" "}
          <MathComponent tex={String.raw`v_1`} display={false} />
          -periodic elements in his study of the{" "}
          <MathComponent tex={String.raw`J`} display={false} />
          -homomorphism; showing the nontriviality of these elements requires
          use of what is known as the{" "}
          <MathComponent tex={String.raw`e`} display={false} />
          -invariant. A more modern approach to show nontriviality involves the
          Adams and Adams-Novikov spectral sequences, and an even more modem
          approach categorifies this into{" "}
          <MathComponent tex={String.raw`\mathbb{F}_2`} display={false} />
          -synthetic spectra. This talk will give a brief introduction to
          <MathComponent tex={String.raw`v_1`} display={false} />
          -periodicity before discussing the Carrick--Davies (
          <Link
            href='https://arxiv.org/abs/2401.16508v2'
            textColor='inherit'
            underline='hover'
            target='_blank'
          >
            arXiv:2401.16508v2
          </Link>
          ) method to detecting{" "}
          <MathComponent tex={String.raw`v_1`} display={false} />
          -periodicity via{" "}
          <MathComponent tex={String.raw`\mathbb{F}_2`} display={false} />
          -synthetic spectra.
        </>
      }
      date='November 21'
      speakerWebsite='https://sites.google.com/view/jacksonmorris/home'
    />,
    <DubTopTalkItem
      speaker='Nelson Niu'
      title={
        <>
          The inverse <MathComponent tex={String.raw`K`} display={false} />
          -theory multifunctor
        </>
      }
      abstract={
        <>
          Thirty years ago, Thomason showed that Segal's{" "}
          <MathComponent tex={String.raw`K`} display={false} />
          -theory functor is an equivalence between a stable homotopy category
          of symmetric monoidal categories and the stable homotopy category of
          connective spectra, passing through certain category-valued functors.
          We will present Mandell's alternate proof of this result exhibiting an
          explicit inverse <MathComponent tex={String.raw`K`} display={false} />
          -theory functor, reviewing the necessary (multi)categorical
          background, as well as Elmendorf and Johnson--Yau's proofs that this
          functor also preserves multiplicative data. Finally, as is the custom
          and my true motivation, we conjecture how this may be generalized
          equivariantly.
        </>
      }
      date='December 5'
      speakerWebsite='https://nelsonniu.com/'
    />,
  ];

  return (
    <PageSkeleton>
      <ContentBlock>
        <Typography color='primary' display='inline' mb={4}>
          <Typography textColor='inherit' level='h1' fontWeight='650'>
            DubTop
          </Typography>
          <Typography textColor='inherit' level='h3' fontWeight='450' ml={2}>
            Fall 2025
          </Typography>
        </Typography>
        <Typography level='body-sm' textColor='black' my={2}>
          DubTop is the graduate student topology and homotopy theory seminar at
          UW. We take turns giving talks on topics of our choosing within a
          selected theme for the quarter. This quarter, the theme is{" "}
          <Typography fontWeight='800' display='inline'>
            Synthetic Spectra
          </Typography>
          . To broaden appeal, we welcome occasional talks on other unrelated
          topics if there are speakers interested in giving them!
        </Typography>
        <Typography level='body-sm' textColor='black' gutterBottom>
          We are meeting{" "}
          <Typography fontWeight='800' display='inline'>
            Fridays 1:30 - 2:30 in Thomson Hall (THO) 325
          </Typography>
          .
        </Typography>

        <Typography color='primary' level='h3' fontWeight='500' mt={6} mb={3}>
          Scheduled Talks
        </Typography>
        <Box display='flex' flexDirection='column'>
          {talks.map((talk) => talk)}
        </Box>
      </ContentBlock>
    </PageSkeleton>
  );
};

export default DubTopFall2025;
