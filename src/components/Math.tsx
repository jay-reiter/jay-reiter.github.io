import { MathComponent } from "mathjax-react";

interface MathProps {
  tex: string;
}

const Math = ({ tex }: MathProps) => {
  return <MathComponent tex={tex} display={false} />;
};

export default Math;
