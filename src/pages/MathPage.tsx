import { Box, List, ListItem, Typography } from "@mui/joy";
import PageBase from "../components/PageBase";
import ContentBlock from "../components/ContentBlock";
import WritingItem from "../components/math-items/WritingItem";
import { MathComponent } from "mathjax-react";

const MathPage = () => {
  return (
    <PageBase>
      <ContentBlock>
        <Typography level='h2' mb={2} color='primary' fontWeight='500'>
          Writing
        </Typography>
        <Typography level='h3' mb={2} color='primary' fontWeight='300'>
          Expository
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
        <Typography level='h2' gutterBottom color='primary' fontWeight='500'>
          Travel
        </Typography>
        <List>
          <ListItem>
            <Typography>Place 1</Typography>
          </ListItem>
          <ListItem>
            <Typography>Place 2</Typography>
          </ListItem>
        </List>
      </ContentBlock>
      <ContentBlock>
        <Typography level='h2' gutterBottom color='primary' fontWeight='500'>
          Talks
        </Typography>
        <List>
          <ListItem>
            <Typography>Talk 1</Typography>
          </ListItem>
          <ListItem>
            <Typography>Talk 2</Typography>
          </ListItem>
        </List>
      </ContentBlock>
    </PageBase>
  );
};

export default MathPage;
