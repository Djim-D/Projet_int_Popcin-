import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Search from "../components/search";
import Filmcat from '../components/affichagefilmcat';
import { fetchMoviesByCategory, fetchCategories } from '../services/api';
import "../styles/index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    };

    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const getMovies = async () => {
        const movies = await fetchMoviesByCategory(selectedCategory);
        setMovies(movies);
      };

      getMovies();
    }
  }, [selectedCategory]);

  return (
    <div className="categories-page">
      <Header />
      <div className="search">
        <Search />
      </div>
      <div className="category-selector">
          <select onChange={(e) => setSelectedCategory(e.target.value)} className="form-control-cat">
            <option value="">Choisissez une catégorie</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      <div className="container">
        <div className="movies-container">
          {movies.length > 0 ? (
            <Filmcat movies={movies} />
          ) : (
            <div className="no-movies">
              <i className="fas fa-search"></i>
              <p>Rien à afficher, veuillez sélectionner une catégorie</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
