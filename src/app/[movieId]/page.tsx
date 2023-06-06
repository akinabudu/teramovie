'use client'
import React, { useEffect,useState } from "react";
// import "../scss/moviedetails.scss";
import Pic from "@/assets/africa.png";
import Image from "next/image";
import { CiClock1, CiPlay1, CiHeart } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import MoviePoster from "../moviePoster";
import { useParams } from 'next/navigation';
import axios from "axios";


type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

const MovieDetails: React.FC = () => {  
  const params = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
          <div className="posterDescription">
            MMA fighter Cole Young seeks out Earth&apos;s greatest champions in
            order to stand against the enemies of Outworld in a high stakes
            battle for the universe.
          </div>
          <div className="posterStatus">
            <div className="date">
              <CiClock1 size={10} />
              23 Apr 2021
            </div>
            <div className="rating">
              <AiOutlineStar size={10} />
              6.2
            </div>
            <div className="duration">
              <CiPlay1 size={18} />
              1hr 50mins
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
        {/* <div style={{display:'flex', justifyContent:'flex-start'}}>
          <MoviePoster PosterList={PosterList2} />
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetails;