import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}
const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <div className="my-6 lg:my-10">
      <div className="gap-8 mb-10">
        <div className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent ">
          {title}
        </div>
        <div className="my-4 text-base lg:text-lg text-center">{subTitle}</div>
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
