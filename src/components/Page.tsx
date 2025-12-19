import { useEffect } from "react";

interface PageProps {
  title?: string;
  component: React.ReactElement;
}

const Page = ({ title, component }: PageProps) => {
  useEffect(() => {
    document.title = title || "";
  }, [title]);

  return component;
};

export default Page;
