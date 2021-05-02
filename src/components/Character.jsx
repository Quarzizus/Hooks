import React from "react";
import "./styles/Character.scss";

const Character = ({ first_name, last_name, email, avatar, children }) => {
  return (
    <section className="Character">
      <picture className="container__img">
        <img src={avatar} alt={first_name} className="Character_img" />
      </picture>
      <h2 className="Character__name">
        {first_name} {last_name}
      </h2>

      <h3 className="Character__location">{email}</h3>
      {children}
    </section>
  );
};

export default Character;
