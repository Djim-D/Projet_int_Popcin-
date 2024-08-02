import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Search from "./search";
import MovieCarousel from "../components/carousselfilm";
import { fetchActorDetails, fetchActorMovies } from "../services/api";
import "../styles/index.scss";

const Acteur = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getActorDetails = async () => {
      const actorData = await fetchActorDetails(id);
      setActor(actorData);
    };

    const getActorMovies = async () => {
      const actorMovies = await fetchActorMovies(id);
      setMovies(actorMovies);
    };

    getActorDetails();
    getActorMovies();
  }, [id]);

  if (!actor) return <div>Chargement...</div>;

  return (
    <div className="actor-details-page">
      <Header />
      <div className="search">
        <Search />
      </div>
      <div className="container">
        <div className="container-acteur">
          <div className="actor-details">
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <div className="acteur-name">
            <h1>{actor.name}</h1>
            <div className="actor-info">
              <div className="actor-biography">
                <h2>Biographie</h2>
                <p>{actor.biography}</p>
              </div>
            </div>
          </div>
          </div>
          <div className="actor-movies">
            <h2>Réalisations Cinématographiques</h2>
            <MovieCarousel movies={movies} />
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Acteur;
