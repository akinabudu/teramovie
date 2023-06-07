'use client'
import React, { createContext, useState } from "react";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export const MyContext = createContext<any>(null);

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [movieResult, setMovieResult] = useState<Movie[]>();

  return (
    <MyContext.Provider value={{ movieResult, setMovieResult }}>
      {children}
    </MyContext.Provider>
  );
};

