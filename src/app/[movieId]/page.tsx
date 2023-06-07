"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useContext, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MyContext } from "../providers";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from 'next/link'

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

const ModalPage: React.FC = () => {
  const [close, setClose] = useState("flex");
  const params = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

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

  function handleClick() {
    setClose("none");
    router.back();
  }

  return (
    <div
      style={{ display: `${close}` }}
      // onClick={handleClick}
      className="modal"
    >
      <div className="modalContent">
        <button className="arrow" onClick={handleClick}>
          <BsArrowLeft size={18} />
        </button>
        <Image
          className="poster"
          src={movie?.Poster ?? ""}
          alt="Poster"
          width={330}
          height={399}
        />{" "}
        <div className="posterTitle">{movie?.Title}</div>
        <div className="posterDescription">{movie?.Plot}</div>
        <Link href={`/movieDetails/${params.movieId}`} className="button">Watch</Link>
      </div>
    </div>
  ); 
};

export default ModalPage;
