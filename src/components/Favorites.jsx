import React from "react";
import "./styles/Favorites.scss";

const Favorites = ({ children }) => {
  return (
    <section className="Favorites">
      <h2>Favorites</h2>
      {children}
    </section>
  );
};

export default Favorites;
