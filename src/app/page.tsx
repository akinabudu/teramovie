import MovieSearch from "./movieList";

export default function Home() {
  return (
    <div style={{width:'100%'}}>
      <div className="mainTitle">Explore</div>
        <MovieSearch />
    </div>
  );
}
