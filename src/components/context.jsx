import { useContext, createContext, useEffect, useState } from "react";
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedfavorites = localStorage.getItem("favorites");
    if (storedfavorites) setFavorites(JSON.parse(storedfavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addfvrt = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removefvrt = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {favorites, addfvrt, removefvrt, isFavorite};
  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
