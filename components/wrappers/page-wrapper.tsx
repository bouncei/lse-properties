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
    <div className="my-10 lg:my-16">
      <>
        <div className="font-medium text-xl lg:text-5xl text-center ">
          {title}
        </div>
        <div className="my-4 text-base lg:text-lg text-center">{subTitle}</div>
        {children}
      </>
    </div>
  );
};

export default PageWrapper;
