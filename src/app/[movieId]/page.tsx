import React from "react";
// import "../scss/moviedetails.scss";
import Pic from "@/assets/africa.png";
import Image from "next/image";
import { CiClock1, CiPlay1, CiHeart } from "react-icons/ci";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import MoviePoster from "../moviePoster";
import { PosterList2 } from "../data/PosterList";

export default function MovieDetails({}) {
  return (
    <div className="container">
      <div className="posterItem">
        <Image
          className="poster"
          src={Pic}
          alt="Poster"
          width={330}
          height={399}
        />
        <div className="posterTitle">
          <div>Mortal Kombat</div>
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
            <Link className="watchButton" href={"#"}>
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
        <div style={{display:'flex', justifyContent:'flex-start'}}>
          <MoviePoster PosterList={PosterList2} />
        </div>
      </div>
    </div>
  );
}
