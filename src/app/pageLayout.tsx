'use client'
import React from "react";
import Menu from "./menu";
import { usePathname } from 'next/navigation';


export default function PageLayout() {

  const pathname = usePathname();

  return (
    <div className="layoutSideBar">
      {pathname ==="/"?
      <div className="layoutSideBarContent">
        Dev<span className="colorText">Hire</span>
      </div>:<div className="layoutSideBarContent">
        Show<span className="colorText">Flix</span>
      </div>
      }
      <Menu />
    </div>
  );
}
