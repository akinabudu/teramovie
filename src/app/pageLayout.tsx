import React from "react";
// import "./scss/pagelayout.scss";

import Menu from "./menu";

export default function PageLayout() {
  return (
    <div className="layoutSideBar">
      <div className="layoutSideBarContent">Dev<span className="colorText">Hire</span></div>
      <Menu />
    </div>
  );
}
