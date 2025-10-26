import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(movie) {
    const exists = favorites.find((f) => f.id === movie.id);
    if (exists) {
      setFavorites(favorites.filter((f) => f.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
