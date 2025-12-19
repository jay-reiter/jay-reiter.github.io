import { List, ListItem, Typography } from "@mui/joy";
import PageSkeleton from "../components/PageSkeleton";
import ContentBlock from "../components/ContentBlock";

const TeachingPage = () => {
  const teachingPositions = [
    {
      number: "Math 124",
      title: "Calculus I",
      quarters: ["Fall 2023", "Winter 2024", "Fall 2025"],
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
        <Typography level='h3' color='primary' fontWeight='500' gutterBottom>
          TA Positions at UW
        </Typography>
        <Typography level='body-sm' textColor='black'>
          <List marker='square' size='sm'>
            {teachingPositions.map((position) => (
              <ListItem>
                <Typography level='title-sm' fontWeight='700' display='inline'>
                  {position.number}: {position.title}
                </Typography>{" "}
                -- {position.quarters.join(", ")}
              </ListItem>
            ))}
          </List>
        </Typography>
      </ContentBlock>
    </PageSkeleton>
  );
};

export default TeachingPage;
