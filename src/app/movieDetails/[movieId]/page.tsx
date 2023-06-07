"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CiClock1, CiPlay1, CiHeart } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { MyContext } from "../../providers";

type Movie = {
  imdbID?: string;
  Title?: string;
  Year?: string;
  Poster?: string;
  Plot?: string;
  Released?: string;
  imdbRating?: string;
  Runtime?: string;
};

const MovieDetails: React.FC = () => {
  const params = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { movieResult } = useContext(MyContext);

  console.log("another result:", movieResult);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=e2f484ab&i=${params.movieId}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(error);
        setLoading(false);
      }
    };

    if (params.movieId) {
      fetchData();
    }
  }, [params.movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="posterItem">
        <Image
          className="poster"
          src={movie?.Poster ?? ""}
          alt="Poster"
          width={330}
          height={399}
        />
        <div className="posterTitle">
          <div>{movie?.Title}</div>
          <div className="posterDescription">{movie?.Plot}</div>
          <div className="posterStatus">
            <div className="date">
              <CiClock1 size={10} />
              {movie?.Released}{" "}
            </div>
            <div className="rating">
              <AiOutlineStar size={10} />
              {movie?.imdbRating}
            </div>
            <div className="duration">
              <CiPlay1 size={18} />
              {movie?.Runtime}
            </div>
          </div>
          <div className="posterButtons">
            <Link href="#" className="watchButton">
              Watch Now
            </Link>
            <div className="likeButton">
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="similarTitle">Similar Movies</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {movieResult &&
            movieResult.slice(0, 3).map((item: any) => (
              <div className="item" key={item.imdbID}>
                <Image
                  className="poster"
                  src={item?.Poster ?? ""}
                  alt="Poster"
                  width={330}
                  height={399}
                />
                <Link className="viewButton" href={`/${item.imdbID}`}>
                  View
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
