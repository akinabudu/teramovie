"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@/assets/search-vector-icon.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";



type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};
export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = async () => {
    try {
      setLoading("loading")
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=e2f484ab&s=${searchQuery||'avenger'}&type=movie`
        );
      if (response.data.Search) {
        const results: Movie[] = response.data.Search.slice(0, 6);
        setLoading("")
        setMovies(results);
      } else {
        setMovies([]);
      }
    } catch (error) {
      setLoading("")
      setError(error)
      console.error('Error searching movies:', error);
    }
  };

  return (
    <>
      <div className="searchBar">
        <div className="searchBox">
          <Image src={SearchIcon} width={18} height={18} alt="Search Icon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Link href="#" onClick={handleSearch} className="searchButton">
          <span className="searchBtnText">Search</span>
        </Link>
        {error && <div>{error}</div>}
      </div>{" "}
      <div className="movieList">
        <div style={{ marginBottom: "28px" }}>
          Results for: <span className="results">{searchQuery}</span>
        </div>
    
         <div className="gridList">
      {loading?<div>{loading}</div>:movies.map((item:any) => (
        <div className='item'  key={item.imdbID}>
          <Image className="poster" src={item.Poster} alt='Poster' width={210} height={300}/>
          <Link className="viewButton" href={`/movieslide/${item.imdbID}`}>
            View
          </Link>
        </div>
      ))}
     
    </div>
      </div>
    </>
  );
}
