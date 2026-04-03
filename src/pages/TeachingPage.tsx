import { Link, List, ListItem, Typography } from "@mui/joy";
import PageSkeleton from "../components/PageSkeleton";
import ContentBlock from "../components/ContentBlock";

const TeachingPage = () => {
  const teachingPositions = [
    {
      number: "Math 124",
      title: "Calculus I",
      quarters: ["Fall 2023", "Winter 2024", "Fall 2025", "Spring 2026"],
    },
    {
      number: "Math 126",
      title: "Calculus III",
      quarters: ["Spring 2024", "Spring 2025"],
    },
    {
      number: "Math 208",
      title: "Matrix Algebra",
      quarters: ["Summer 2024", "Winter 2026"],
    },
    {
      number: "Math 544",
      title: "Geometry and Topology of Manifolds, I",
      quarters: ["Fall 2024"],
    },
    {
      number: "Math 545",
      title: "Geometry and Topology of Manifolds, II",
      quarters: ["Winter 2025"],
    },
  ];

  return (
    <PageSkeleton>
      <ContentBlock>
        <Typography level="h3" color="primary" fontWeight="500" gutterBottom>
          Teaching
        </Typography>
        <Typography level="body-sm" textColor="black">
          In Summer 2026 I will be teaching{" "}
          <Typography level="title-sm" fontWeight="700" display="inline">
            Math 224: Vector Calculus
          </Typography>{" "}
          at UW. I am writing my own notes for this course, and they will be
          posted here soon.
        </Typography>
      </ContentBlock>
      <ContentBlock>
        <Typography level="h3" color="primary" fontWeight="500" gutterBottom>
          TA Positions at UW
        </Typography>
        <Typography level="body-sm" textColor="black">
          <List marker="square" size="sm">
            {teachingPositions.map((position) => (
              <ListItem>
                <Typography level="title-sm" fontWeight="700" display="inline">
                  {position.number}: {position.title}
                </Typography>{" "}
                -- {position.quarters.join(", ")}
              </ListItem>
            ))}
          </List>
        </Typography>
      </ContentBlock>
      <ContentBlock>
        <Typography level="h3" color="primary" fontWeight="500" gutterBottom>
          Washington Directed Reading Program Mentorship
        </Typography>
        <Typography level="body-sm" textColor="black">
          The{" "}
          <Link
            href={"https://sites.uw.edu/wdrp/"}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
          >
            Washington Directed Reading Program
          </Link>{" "}
          (WDRP) pair interested undergraduate students with mathematics
          graduate student mentors to embark on a quarter-long independent
          reading projects. I have run the following projects.
          <List marker="square" size="sm">
            <ListItem>
              <Typography level="title-sm" fontWeight="700" display="inline">
                Category Theory
              </Typography>{" "}
              (with Augie Herrin) -- a project focused on getting acquainted
              with fundamental topics in category theory such as the Yoneda
              lemma, adjoint functions, limits and colimits, and universal
              properties.{" "}
              <Link
                href={"../../pdfs/yoneda-lemma.pdf"}
                underline="always"
                target="_blank"
                rel="noreferrer"
              >
                Here
              </Link>{" "}
              are some (somewhat unfinished) notes on the Yoneda lemma and how
              it underpins the idea of universal properties.
            </ListItem>
          </List>
        </Typography>
      </ContentBlock>
    </PageSkeleton>
  );
};

export default TeachingPage;
