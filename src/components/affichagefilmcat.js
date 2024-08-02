import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles/index.scss";

const Filmcat = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 21;
  const history = useHistory();
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleMovieClick = (id) => {
    history.push(`/movie/${id}`);
  };

  return (
    <>
      <div className="movie-grid">
        {currentMovies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card-cat"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              className="movie-img-cat"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      <Pagination className="justify-content-center mt-4">
        {Array.from(
          { length: Math.ceil(movies.length / moviesPerPage) },
          (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </>
  );
};

export default Filmcat;
