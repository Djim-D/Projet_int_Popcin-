import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { fetchMoviesByCategory } from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/index.scss";

const MovieCarousel = ({ category, movies: propMovies }) => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getMovies = async () => {
      if (propMovies) {
        setMovies(propMovies);
      } else {
        const moviesData = await fetchMoviesByCategory(category);
        setMovies(moviesData);
      }
    };

    getMovies();
  }, [category, propMovies]);

  const getMoviesPerSlide = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return 3;
    }
    return 7;
  };

  const moviesPerSlide = getMoviesPerSlide();
  const groupedMovies = [];
  for (let i = 0; i < movies.length; i += moviesPerSlide) {
    groupedMovies.push(movies.slice(i, i + moviesPerSlide));
  }

  const handleMovieClick = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <Carousel className="carouselpetit">
      {groupedMovies.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="movie-carousel-container">
            <div className="movie-carousel">
              {group.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-card"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img
                    className="movie-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
