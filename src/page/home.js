import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/header";
import Search from "../components/search";
import Footer from "../components/footer";
import Vedette from "../components/vedette";
import MovieCarousel from "../components/carousselfilm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/index.scss";

const HomePage = () => {
  useEffect(() => {
    const search = document.querySelector(".search");
    const btn = document.querySelector(".btn2");
    const input = document.querySelector(".input");

    if (btn) {
      btn.addEventListener("click", () => {
        search.classList.toggle("active");
        input.focus();
      });
    }
  }, []);

  return (
    <div className="body">
      <Header />
      <div className="search">
        <Search />
      </div>

      <div className="custom-container my-4">
        <Vedette />
        <h2 className="text-center">
          Explorez nos catégories et trouvez votre film idéal !
        </h2>
        <h3 className="text-center">Action</h3>
        <MovieCarousel category="28" /> {/* 28 is the genre ID for Action */}
        <h3 className="text-center"> Comédie</h3>
        <MovieCarousel category="35" /> {/* 35 is the genre ID for Comedy */}
        <h3 className="text-center">Horreur</h3>
        <MovieCarousel category="27" /> {/* 27 is the genre ID for Horror */}
        <div className="text-center my-4">
          <Link className="btn btn-primary btn-ba" to="/categories">Voir plus de catégories</Link>
        </div>
      </div>
      <Footer />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgld"
        crossOrigin="anonymous"
      ></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </div>
  );
};

export default HomePage;
