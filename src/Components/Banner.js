import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Banner extends Component {
  render() {
    let movie = movies.results;
    console.log(movie);
    return (
      <>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            {/* <div class="carousel-item active">
              <img src={`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`} class="d-block w-100" alt="..." />
            </div> */}
            {
              movie.map((movieObj) => (

                    <div class="carousel-item active">
                      <img src={`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`} class="d-block w-100" alt="..."/>
                    </div>
              ))
            }
           
          </div>
        </div>


        
      </>
    );
  }
}
