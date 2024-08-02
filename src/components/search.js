import React, { useState, useEffect }from "react";
import { useHistory } from "react-router-dom";
import Filmcat from "./affichagefilmcat";
import '../styles/components/Search.scss';
import { fetchSearchMovies } from "../services/api";

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (query) {
      fetchSearchMovies(query).then((res) => setData(res));
    }
  }, [query]);

  const onSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      history.push('/categories');
    }
  };
  return (
    <div className="search">
      <section className="search-section">
        <div className="search-container">
          <div className="search-box position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Titre du film"
              value={query}
              onChange={onSearch}
            />
          </div>
          <p className="mt-3">
            Plongez dans l'univers du cinéma : des classiques aux dernières
            nouveautés
          </p>
        </div>
      </section>
      {query ? (
        <Filmcat movies={data} />
      ) :null}
    </div>
  );
};

export default Search;
