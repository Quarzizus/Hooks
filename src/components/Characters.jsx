import React, { useContext, useEffect, useReducer } from "react";
import Character from "../components/Character";
import ThemeContext from "../context/ThemeContext";
import { initialState, favoriteReducer } from "../reducers/favoriteReducer";
import "./styles/Characters.scss";

const Characters = () => {
  const { getUsers, colors, users } = useContext(ThemeContext);

  const handlerClick = (favorite) => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const valid = favorites.favorites.find(
      (favoritesFavorite) => favoritesFavorite.id == favorite.id
    );
    if (!valid) {
      dispatch({
        type: "ADD_TO_FAVORITES",
        payload: favorite,
      });
    }
  };

  useEffect(async () => {
    getUsers();
  }, []);

  return (
    <article className="Characters" style={colors}>
      {favorites.favorites.map((favorite) => {
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

      {users.map((user) => {
        return (
          <Character
            key={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
          >
            <button type="button" onClick={() => handlerClick(user)}>
              ADD
            </button>
          </Character>
        );
      })}
    </article>
  );
};
export default Characters;
