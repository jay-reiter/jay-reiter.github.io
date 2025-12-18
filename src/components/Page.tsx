import { useEffect } from "react";

interface PageProps {
  title?: string;
  component: React.ReactNode;
}

const Page = ({ title, component }: PageProps) => {
  useEffect(() => {
    document.title = title || "";
  }, [title]);

  return <>{component}</>;
};

export default Page;
