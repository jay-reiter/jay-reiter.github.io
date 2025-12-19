import { List, ListItem, Typography } from "@mui/joy";
import { MathComponent } from "mathjax-react";
import PageSkeleton from "../components/PageSkeleton";
import ContentBlock from "../components/ContentBlock";
import TravelItem from "../components/math-items/TravelItem";
import TalkItem from "../components/math-items/TalkItem";
import WritingItem from "../components/math-items/WritingItem";

const MathPage = () => {
  const travelItems = [
    <TravelItem
      title='European Autumn School in Topology'
      date='September 2025'
      location='Utrecht, Netherlands'
    />,
    <TravelItem
      title='European Talbot'
      date='July 2025'
      location='Kolding, Denmark'
    />,
    <TravelItem
      title='Western Algebraic Geometry Symposium'
      date='April 2025'
      location='UBC, Vancouver, Canada'
    />,
    <TravelItem
      title='Joint Math Meetings'
      date='January 2025'
      location='Seattle, WA'
    />,
    <TravelItem
      title='Life After the Telescope Conjecture'
      date='December 2024'
      location='SL Math, Berkeley, CA'
    />,
    <TravelItem title='eCHT Kan Seminar' date='Fall 2024' location='Online' />,
    <TravelItem
      title='Joint Math Meetings'
      date='January 2023'
      location='Boston, MA'
    />,
  ];
  const externalTalks = [
    <TalkItem
      title={
        <>
          Adams: on the groups{" "}
          <MathComponent tex={String.raw`J(X)`} display={false} /> -- IV
        </>
      }
      seminar='eCHT Kan Seminar'
      date='Fall 2024'
      link='https://s.wayne.edu/echt/echt-reading-seminars/kan-seminar-fall-2024/'
    />,
  ];
  const internalTalks = [
    <TalkItem
      title={
        <>
          Deformations of stable{" "}
          <MathComponent tex={String.raw`\infty`} display={false} />
          -categories
        </>
      }
      seminar='DubTop'
      date='Fall 2025'
      link=''
    />,
    <TalkItem
      title='Chromatic homotopy theory and the moduli of formal groups'
      seminar='Writing Milestone Seminar'
      date='Spring 2025'
      link='https://sites.math.washington.edu/~zawadx/milestone_sem.html'
    />,
    <TalkItem
      title='Descent, derived descent, and the Adams spectral sequence'
      seminar='1-2-3 Seminar'
      date='Spring 2025'
      link='https://math.washington.edu/events/2025-05-16/1-2-3-seminar-descent-derived-descent-and-adams-spectral-sequence'
    />,
    <TalkItem
      title='Sites and stacks'
      seminar='DubTop Seminar'
      date='Winter 2025'
      link='https://sites.google.com/view/dubtopseminar/previous-quarters/winter-2025'
    />,
    <TalkItem
      title={
        <>
          The Hopf algebroid{" "}
          <MathComponent
            tex={String.raw`(\text{MU}_*,\,\text{MU}_*\text{MU})`}
            display={false}
          />{" "}
          and formal groups
        </>
      }
      seminar='DubTop Seminar'
      date='Winter 2025'
      link='https://sites.google.com/view/dubtopseminar/previous-quarters/winter-2025'
    />,
    <TalkItem
      title='Foundations of Goodwillie calculus, II'
      seminar='DubTop Seminar'
      date='Fall 2024'
      link='https://sites.google.com/view/dubtopseminar/previous-quarters/fall-2024'
    />,
    <TalkItem
      title='Computing bordism rings with homotopy theory'
      seminar='Back to School Seminar'
      date='Fall 2024'
      link='https://sites.google.com/view/jacksonmorris/seminars-organized/fall-2024-back-to-school-seminar?authuser=0'
    />,
    <TalkItem
      title='The Hopf invariant'
      seminar='Cohomology Operations'
      date='Spring 2024'
      link='https://sites.google.com/view/jacksonmorris/seminars-organized/spring-2024-cohomology-operations?authuser=0'
    />,
    <TalkItem
      title='Construction of the Steenrod squares'
      seminar='Cohomology Operations'
      date='Spring 2024'
      link='https://sites.google.com/view/jacksonmorris/seminars-organized/spring-2024-cohomology-operations?authuser=0'
    />,
    <TalkItem
      title='Introduction to Khovanov homology'
      seminar='Arxiv Seminar'
      date='Winter 2024'
      link=''
    />,
  ];

  return (
    <PageSkeleton>
      <ContentBlock>
        <Typography level='h3' color='primary' fontWeight='500'>
          Expository Writing
        </Typography>
        <WritingItem
          title={
            <Typography>
              On presentable{" "}
              <MathComponent tex={String.raw`\infty`} display={false} />
              -categories and{" "}
              <MathComponent tex={String.raw`\infty`} display={false} />
              -topoi
            </Typography>
          }
          path='../../pdfs/presentable-cats-and-infty-topoi.pdf'
          date='October 2025'
        >
          Some user's guide notes which I made to record key facts which come up
          in practice. One of my main goals making these was to understand{" "}
          <MathComponent tex={String.raw`\infty`} display={false} />
          -categorical localizations,{" "}
          <MathComponent tex={String.raw`\mathsf{Pr}^L`} display={false} />, and
          hypercomplete objects. Another was to have a quick reference for
          things like the existence of adjoint functors, representability
          criteria, etc.
        </WritingItem>
        <WritingItem
          title='Chromatic homotopy theory and the moduli stack of formal groups'
          path='../../pdfs/chromatic-htpy-and-mfg.pdf'
          date='Summer 2025'
        >
          A lengthy document covering foundational topics and theorems in
          chromatic homotopy from the algebro-geometric perspective. Also
          includes some background on formal groups and stacks. This was written
          to fulfill the second year "writing milestone" requirement for Ph.D.
          students at UW.
        </WritingItem>
      </ContentBlock>
      <ContentBlock>
        <Typography level='h3' gutterBottom color='primary' fontWeight='500'>
          Conferences and Workshops
        </Typography>
        <List marker='square' size='sm'>
          {travelItems.map((item) => {
            return <ListItem>{item}</ListItem>;
          })}
        </List>
      </ContentBlock>
      <ContentBlock>
        <Typography level='h3' gutterBottom color='primary' fontWeight='500'>
          Talks
        </Typography>
        <Typography level='h4' gutterBottom color='primary' fontWeight='300'>
          External Talks
        </Typography>
        <List marker='square' size='sm'>
          {externalTalks.map((item) => {
            return <ListItem>{item}</ListItem>;
          })}
        </List>
        <Typography level='h4' gutterBottom color='primary' fontWeight='300'>
          Talks at UW Graduate Student Seminars
        </Typography>
        <List marker='square'>
          {internalTalks.map((item) => {
            return <ListItem>{item}</ListItem>;
          })}
        </List>
      </ContentBlock>
    </PageSkeleton>
  );
};

export default MathPage;
