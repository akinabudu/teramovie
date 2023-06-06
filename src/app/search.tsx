"use client";
import React from "react";
import Link from "next/link";
// import "./scss/search.scss";
import SearchIcon from "@/assets/search-vector-icon.svg";
import Image from "next/image";

interface searchProps {
  searchTerm: any;
  setSearchTerm: any;
  handleSearch: any;
  error: any;
}

export default function Search({
  searchTerm,
  setSearchTerm,
  handleSearch,
  error,
}: searchProps) {
  return (
    <div className="searchBar">
      <div className="searchBox">
        <Image src={SearchIcon} width={18} height={18} alt="Search Icon" />
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Link href="#" onClick={handleSearch} className="searchButton">
        <span className="searchBtnText">Search</span>
      </Link>
      {error && <div>{error}</div>}
    </div>
  );
}
