import React from "react";
import Link from "next/link";
// import "./scss/search.scss";
import SearchIcon from '@/assets/search-vector-icon.svg'
import Image from "next/image";


export default function Search() {
  return (
    <div className="searchBar">
      <div className="searchBox">
      <Image src={SearchIcon} width={18}
height={18} alt="Search Icon"/>
        <input className="searchInput" placeholder="Search" />
      </div>
      <Link href="#" className="searchButton">
        <span className="searchBtnText">

        Search
        </span>
      </Link>
    </div>
  );
}
