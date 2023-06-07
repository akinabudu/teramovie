import React from "react";
import SearchIcon from "@/assets/search-icon.svg";
import WatchListIcon from "@/assets/watchlist-icon.svg";
import Image from "next/image";
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="menu">
      <Link href='/' className="searchMenu">
        {" "}
        <div className="active"></div>
        <Image src={SearchIcon} width={30} height={30} alt="Search Icon" />
        Search
      </Link>
      <div className="searchWatchList">
        <Image src={WatchListIcon} width={30} height={30} alt="Search Icon" />
        Watchlist
      </div>
    </div>
  );
}
