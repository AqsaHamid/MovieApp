const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_KEY:", import.meta.env.VITE_API_KEY);
console.log("API_URL:", import.meta.env.VITE_API_URL);

export const fetchPopMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results;
};

export const fetchSearch = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  if (!response.ok) {
    throw new Error("Failed to search movies");
  }
  const data = await response.json();
  return data.results;
};

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
