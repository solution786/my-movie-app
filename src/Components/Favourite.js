import React, { Component } from "react";

export default class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      currGenre: "All Genres",
      movies: [],
      currText: "",
      limit: 5,
      currPage: 1,
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("movies-app") || "[]");
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let temp = [];
    data.forEach((movieObj) => {
      if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    });

    temp.unshift("All Genres");
    this.setState({
      genres: [...temp],
      movies: [...data],
    });
  }

  handleGenreChange = (genre) => {
    this.setState({
      currGenre: genre,
    });
  };

  sortPopularityDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objB.popularity - objA.popularity;
    });

    this.setState({
      movies: [...temp],
    });
  };

  sortPopularityAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objA.popularity - objB.popularity;
    });

    this.setState({
      movies: [...temp],
    });
  };

  sortRatingAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });

    this.setState({
      movies: [...temp],
    });
  };

  sortRatingDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });

    this.setState({
      movies: [...temp],
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currPage: page,
    });
  };

  handleDelete = (id) => {
    let newArr = [];
    newArr = this.state.movies.filter((movieObj) => movieObj.id != id);

    this.setState({
      movies: [...newArr],
    });

    localStorage.setItem("movies-app", JSON.stringify(newArr));
  };

  render() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let filterArr = [];

    if (this.state.currText == "") {
      filterArr = this.state.movies;
    } else {
      filterArr = this.state.movies.filter((movieObj) => {
        let title = movieObj.original_title.toLowerCase();
        return title.includes(this.state.currText.toLowerCase());
      });
    }

    if (this.state.currGenre != "All Genres") {
      filterArr = this.state.movies.filter(
        (movieObj) => genreids[movieObj.genre_ids[0]] == this.state.currGenre
      );
    }

    let pages = Math.ceil(filterArr.length / this.state.limit);
    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
    }
    let startIdx = (this.state.currPage - 1) * this.state.limit;
    let endIdx = startIdx + this.state.limit;
    filterArr = filterArr.slice(startIdx, endIdx);

    return (
      <div className="favourite-container">
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-lg-3 col-sm-12">
              <ul className="list-group favourites-genres">
                {this.state.genres.map((genre) =>
                  this.state.currGenre === genre ? (
                    <li
                      className="list-group-item"
                      style={{
                        backgroundColor: "#3f51b5",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {genre}
                    </li>
                  ) : (
                    <li
                      className="list-group-item"
                      style={{
                        backgroundColor: "white",
                        color: "#3f51b5",
                        fontWeight: "bold",
                      }}
                      onClick={() => this.handleGenreChange(genre)}
                    >
                      {genre}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ----------- right ------- */}
            <div class="col-lg-9 col-sm-12">
              <div className="row mt-md-3">
                <div className="col-12">
                  <div className="input-group mb-3 mt-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Search
                    </span>
                    <input
                      type="text"
                      className="form-control col-5"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      value={this.state.currText}
                      onChange={(e) =>
                        this.setState({ currText: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="input-group mb-3 ml-1">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Rows Count
                    </span>
                    <input
                      type="text"
                      className="form-control col-5"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      value={this.state.limit}
                      onChange={(e) => this.setState({ limit: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-md-3">
                <div className="col-l2">
                  <table className="table">
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">
                          <i
                            className="fa-solid fa-caret-up"
                            onClick={this.sortPopularityDesc}
                          ></i>{" "}
                          Popularity{" "}
                          <i
                            className="fa-solid fa-caret-down"
                            onClick={this.sortPopularityAsc}
                          ></i>
                        </th>

                        <th scope="col">
                          <i
                            className="fa-solid fa-caret-up"
                            onClick={this.sortRatingDesc}
                          ></i>{" "}
                          Rating{" "}
                          <i
                            className="fa-solid fa-caret-down"
                            onClick={this.sortRatingAsc}
                          ></i>
                        </th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterArr.map((movieObj) => (
                        <tr>
                          <td>
                            <img
                              src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                              className="card-img-top movies-img"
                              alt={movieObj.original_title}
                              style={{
                                width: "4rem",
                                height: "3rem",
                                marginRight: "1rem",
                              }}
                            />
                            {movieObj.original_title}
                          </td>
                          <td> {genreids[movieObj.genre_ids[0]]} </td>
                          <td> {movieObj.popularity} </td>
                          <td> {movieObj.vote_average} </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => this.handleDelete(movieObj.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      {pagesArr.map((page) => (
                        <li className="page-item">
                          <a
                            className="page-link"
                            onClick={() => this.handlePageChange(page)}
                          >
                            {page}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* ---------------------------- */}
          </div>
        </div>
      </div>
    );
  }
}
