import React, { Component } from 'react'

export default class sample extends Component {
  render() {
    return (
      <div>sample</div>
    )
  }
}

// console.log(value, this.state.currPage);
                // value == this.state.currPage ? 
                (
                  <li className="page-item selected" key={index}>
                    <a
                      className="page-link"
                      onClick={() => this.handleClick(value)}
                    >
                      {value}
                    </a>
                  </li>
                ) 
                // : (
                //   <li
                //     className="page-item"
                //     key={index}
                
                //   >
                //     <a
                //       className="page-link"
                //       onClick={() => this.handleClick(value)}
                //     >
                //       {value}
                //     </a>
                //   </li>
                // );
// -------------------------------------------
                {/* <div
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
                  </div> */}


                     {/* // <div className='navbar'>
      //   <Link to='/' style={{textDecoration : 'none'}}><h2>MoviesApp</h2></Link>

      //   <Link to='/favourites' style={{textDecoration : 'none'}}> <h3>Favourite</h3></Link>

      // </div> */}

      // {movies == "" ? (
      //   <div className="spinner-border text-primary" role="status">
      //     <span className="visually-hidden">Loading...</span>
      //   </div>
      // ) : (
      //   <div className="card banner-card">
      //     <img
      //       src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      //       className="card-img-top banner-img"
      //       alt={movie.title}
      //     />
      //     <h1 className="card-title banner-title">{movie.original_title}</h1>
      //     <p className="card-text banner-text">{movie.overview}</p>
    
      //   </div>
      // )}



      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active h-60">
              <img src={`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`} className="d-block h-60 w-100" alt="..." />
            </div>
            {
              movie.map((movieObj) => (
                  <div className="carousel-item">
                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="d-block h-60 w-100" alt={movie.title}/>
                  </div>
              ))
            }
            {/* <div class="carousel-item">
              <img src={movie.backdrop_path} class="d-block w-100" alt="..." />
            // </div> */}
            // </div>
          // </div> */}