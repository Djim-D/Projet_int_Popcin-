import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/index.scss";

const Vedette = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData.slice(0, 3));
    };

    getMovies();
  }, []);

  const handleWatchNow = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {movies.map((movie, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              className="d-block w-100"
              alt={movie.title}
            />
            <div className="carousel-caption ">
              <p className="fs-3 text-uppercase">{movie.tagline}</p>
              <h1 className="display-1 fw-bolder text-capitalize">
                {movie.title}
              </h1>
              <p className="fs-5">{movie.overview}</p>
              <button
                className="btn btn-primary px-4 py-2 fs-5"
                onClick={() => handleWatchNow(movie.id)}
              >
                Regardez maintenant
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Vedette;
