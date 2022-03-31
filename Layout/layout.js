import React, { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const layoutRef = useRef();

  useEffect(() => {
    console.log("Mounted");
    const bg = localStorage.getItem("background");
    layoutRef.current.classList.add(bg);

    return () => {
      console.log("Un Mounted");
      const changedBg = bg === "default-bg" ? "changed-bg" : "default-bg";
      localStorage.setItem("background", changedBg);
    };
  }, []);

  return (
    <div ref={layoutRef} className="layout">
      {children}
    </div>
  );
};

export default Layout;
