import React from "react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="overflow-auto">
      <div className="mx-auto max-w-screen-2xl">
        <div className="md:h-screen  flex flex-col mx-4 md:mx-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthenticationLayout;
