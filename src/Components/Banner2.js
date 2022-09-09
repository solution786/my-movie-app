import Carousel from 'react-bootstrap/Carousel';
import { movies } from './getMovies';

function Banner2() {
    let movie = movies.results;
     
  return (
    <Carousel>
      {
        movie.map((movieObj, index) => (
            <Carousel.Item interval={1000 + 200 + index * 100}>
                <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                alt="Second slide" height="600px" 
                />
                <Carousel.Caption>
                <h3>{movieObj.original_title}</h3>
                <p>{movieObj.overview}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Banner2;