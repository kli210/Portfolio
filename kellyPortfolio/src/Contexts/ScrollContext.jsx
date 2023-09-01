import React, { createContext, useRef } from "react";

const ScrollContext = createContext(null);

const ScrollProvider = ({ children }) => {
  const heroRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{
        handleScrollToProjects,
        projectRef,
        handleScrollToHero,
        heroRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };
