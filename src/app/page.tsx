// import "./scss/body.scss";
import Search from './search'
import MovieList from './movieList'

export default function Home() {
  return (
    <div className=''>
      <div className='mainTitle'>

    Explore
      </div>
    <Search/>
    <MovieList/>
    </div>
  )
}
