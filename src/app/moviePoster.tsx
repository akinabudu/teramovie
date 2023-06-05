import Link from "next/link";
import React from "react";
// import "./scss/movieposter.scss";
import Pic from '@/assets/africa.png'
import Image from 'next/image'

export default function MoviePoster({PosterList}:{PosterList:number[]}) {
  return (
    <div className="gridList">
      {PosterList.map((item) => (
        <div className='item'  key={item}>
          <Image className="poster" src={Pic} alt='Poster' width={210} height={300}/>
          <Link className="viewButton" href={`/${item}`}>
            View
          </Link>
        </div>
      ))}
    </div>
  );
}
