import React, { useContext, useEffect, useReducer } from "react";
import Character from "../components/Character";
import Favorites from "../components/Favorites";
import Search from "../components/Search";
import GlobalContext from "../context/GlobalContext";
import { initialState, favoriteReducer } from "../reducers/favoriteReducer";
import "./styles/Characters.scss";

const Characters = () => {
  const { getUsers, colors, users, usersFiltered } = useContext(GlobalContext);
  const [stateFavorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handlerClick = (favorite) => {
    const valid = stateFavorites.favorites.find(
      (favoritesFavorite) => favoritesFavorite.id == favorite.id
    );
    if (!valid) {
      dispatch({
        type: "ADD_TO_FAVORITES",
        payload: favorite,
      });
      console.log(stateFavorites);
    }
  };

  useEffect(async () => {
    getUsers();
  }, []);

  return (
    <article className="Characters" style={colors}>
      <section className="Characters_container">
        <Search />
        <Favorites>
          {stateFavorites.favorites.map((favorite) => {
            return (
              <li key={favorite.id}>
                <Character
                  first_name={favorite.first_name}
                  last_name={favorite.last_name}
                  email={favorite.email}
                  avatar={favorite.avatar}
                />
              </li>
            );
          })}
        </Favorites>
        <h2 className="Characters_title">Characters</h2>
        {usersFiltered.map((user) => {
          return (
            <Character
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              avatar={user.avatar}
            >
              <button
                className="Character_button"
                type="button"
                onClick={() => handlerClick(user)}
              >
                ADD
              </button>
            </Character>
          );
        })}
      </section>
    </article>
  );
};
export default Characters;
