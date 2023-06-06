import axios from 'axios'
export const fetchMovie = async ():Promise<[]|unknown> => {
    try {
      const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=e2f484ab&s=Avengers');
      const limitedResults = response.data.Search.slice(0,6)
      return limitedResults;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return error
    }
}