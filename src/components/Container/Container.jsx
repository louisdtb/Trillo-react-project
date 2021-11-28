import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="u-flexbox">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Container;
