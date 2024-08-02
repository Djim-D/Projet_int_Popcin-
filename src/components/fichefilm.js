import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Search from "../components/search";
import Header from "./header";
import Footer from "./footer";
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieTrailer,
} from "../services/api";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-bootstrap";
import "../styles/components/fichefilm.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };

    const getCastDetails = async () => {
      const castData = await fetchMovieCast(id);
      setCast(castData);
    };
    const getMovieTrailer = async () => {
      const trailerData = await fetchMovieTrailer(id);
      setTrailer(trailerData);
    };

    getMovieDetails();
    getCastDetails();
    getMovieTrailer();
  }, [id]);

  if (!movie) return <div>Chargement...</div>;

  const rating = movie.vote_average * 10;
  const actorsPerSlide = 8;
  const groupedActors = [];
  for (let i = 0; i < cast.length; i += actorsPerSlide) {
    groupedActors.push(cast.slice(i, i + actorsPerSlide));
  }

  const handleActorClick = (actorId) => {
    history.push(`/actor/${actorId}`);
  };

  return (
    <div className="movie-details-page">
      <Header />
      <Search />
      <div className="container">
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h1 className="fonth1">{movie.title}</h1>
            <div className="border age badge me-5 font">PG-13</div>
            <div className="font">{movie.release_date}</div>
            <div className="font">{movie.genres.map((genre) => genre.name).join(", ")}</div>
              <div className="movie-rating font">
                <CircularProgressbar
                  value={rating}
                  text={`${rating}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#D41516",
                    trailColor: "#E54F50",
                  })}
                />
              </div>
              <div className="duration font">{movie.runtime} min</div>
            <div className="texteapercu " >Apercu : </div>
            <p className="font">{movie.overview}</p>
            <div>
                <a
                  href="#ba"
                  className="btn btn-trailer align-items-center btn-ba font"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="play-icon"
                    size="2xl"
                  />
                  Regarder la bande-annonce
                </a>
              </div>
          </div>
        </div>
        <div className="movie-cast">
          <h2>Têtes d'affiche</h2>
          <Carousel className="carouselpetit">
            {groupedActors.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="movie-carousel-container fichefilmcarousel">
                  <div className="movie-carousel cast-list">
                    {group.map((actor) => (
                      <div
                        key={actor.cast_id}
                        className="cast-member actor-card"
                        onClick={() => handleActorClick(actor.id)}
                      >
                        <img
                          className="actor-img"
                          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                          alt={actor.name}
                        />
                        <p className="actor-name">{actor.name}</p>
                        <p className="actor-character">
                          <strong>{actor.character}</strong>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="bandeannonce">
          <h2 className="titreannonce">Bande Annonce</h2>
          {trailer && (
            <div className="video-container" id="ba">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Bande Annonce"
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
