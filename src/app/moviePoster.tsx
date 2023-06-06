import Link from "next/link";
import React from "react";
import Pic from '@/assets/africa.png'
import Image from 'next/image'

export default function MoviePoster({PosterList}:{PosterList:any}) {
  
  return (
    <div className="gridList">
      {PosterList.Search.map((item:any) => (
        <div className='item'  key={item}>
          <Image className="poster" src={Pic} alt='Poster' width={210} height={300}/>
          <Link className="viewButton" href={`/movieslide`}>
            View
          </Link>
        </div>
      ))}

    </div>
  );
}
