import React, { Component } from "react";
// import { movies } from "./getMovies";
import Banner2 from "./Banner2";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
      favourites: [],
    };
  }

  async componentDidMount() {
    // side effects works
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0ab3230e05f4064259e21e4e25300ffe&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    // console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=0ab3230e05f4064259e21e4e25300ffe&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    // console.log(data);
    this.setState({
      movies: [...data.results],
    });
  };

  handleNext = () => {
    let temparr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      temparr.push(i);
    }

    this.setState(
      {
        parr: [...temparr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handlePrevious = () => {
 
    if (this.state.currPage != 1) {
      let tempArr = [...this.state.parr];
      tempArr.pop();
      this.setState(
        {
          parr : [...tempArr],
          currPage: this.state.parr.length - 1,
        },
        this.changeMovies
      );
    }
  };

  handleClick = (value) => {
    if (value != this.state.currPage) {
      this.setState(
        {
          currPage: value,
        },
        this.changeMovies
      );
    }
  };

  handleFavourites = (movie) => {
    let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
    if (this.state.favourites.includes(movie.id)) {
      oldData = oldData.filter((movieObj) => movieObj.id != movie.id);
    } else {
      oldData.push(movie);
    }
    localStorage.setItem("movies-app", JSON.stringify(oldData));
    console.log(oldData);
    this.handleFavouritesState();
  };

  handleFavouritesState = () => {
    let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
    let temp = oldData.map((movie) => movie.id);
    this.setState({
      favourites: [...temp],
    });
  };

  render() {
    return (
      <>
        <Banner2 />
        {this.state.movies.length === 0 ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <div className="heading mt-5">
            <h3 className="h3">
              Trending Movies
            </h3>
            <div class="blank"></div>
            </div>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
                <div
                  className="card movies-card"
                  onMouseEnter={() => this.setState({ hover: movieObj.id })}
                  onMouseLeave={() => this.setState({ hover: "" })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top movies-img"
                    alt={movieObj.original_title}
                  />
                  <h5 className="card-title movies-title">
                    {movieObj.original_title}
                  </h5>
                  <div
                    className="button-wrapper"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {this.state.hover === movieObj.id && (
                      <a
                        className="btn btn-primary movies-button"
                        onClick={() => this.handleFavourites(movieObj)}
                      >
                        {this.state.favourites.includes(movieObj.id)
                          ? "Remove to Favourite"
                          : "Add to Favourite"}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" onClick={this.handlePrevious}>
                  Previous
                </a>
              </li>
              {
              this.state.parr.map((value, index) => (

                <li className="page-item" key={index}> {
                    value == this.state.currPage 
                    ? (
                        <a
                          className="selected page-link "
                          onClick={() => this.handleClick(value)}
                        >
                          {value}
                        </a>
                    ) 
                    :
                    <a
                      className="page-link"
                      onClick={() => this.handleClick(value)}
                    >
                      {value}
                    </a>

                }
                </li> 
              ))
                
              }
              <li className="page-item">
                <a className="page-link" onClick={this.handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
