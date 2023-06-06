import React from "react";
import SearchIcon from "@/assets/search-icon.svg";
import WatchListIcon from "@/assets/watchlist-icon.svg";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="menu">
      <div className="searchMenu">
        {" "}
        <div className="active"></div>
        <Image src={SearchIcon} width={30} height={30} alt="Search Icon" />
        Search
      </div>
      <div className="searchWatchList">
        <Image src={WatchListIcon} width={30} height={30} alt="Search Icon" />
        Watchlist
      </div>
    </div>
  );
}
