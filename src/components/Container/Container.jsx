import { React, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

const Container = () => {
  const [mainContent, setMainContent] = useState("welcome");

  const setPageHandler = (e) => {
    setMainContent(e);
  };

  return (
    <div className="container">
      <Navbar setPage={setPageHandler} activePage={mainContent} />
      <div className="container__content">
        <Sidebar setPage={setPageHandler} activePage={mainContent} />
        <MainContent activePage={mainContent} />
      </div>
    </div>
  );
};

export default Container;
