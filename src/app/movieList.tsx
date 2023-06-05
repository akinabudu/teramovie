import React from "react";
import MoviePoster from "./moviePoster";
import { PosterList } from "./data/PosterList";

export default function MovieList() {
  return (
    <div className="movieList">
      <div style={{ marginBottom: "28px" }}>
        Results for: <span className="results">Mortal Kombat</span>
      </div>
      <MoviePoster PosterList={PosterList} />
    </div>
  );
}
