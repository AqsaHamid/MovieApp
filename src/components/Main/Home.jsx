import Card from "../common/Card";
import { use, useState } from "react";
import { useEffect } from "react";
import { fetchPopMovies, fetchSearch } from "./api";
function Home() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // useEffect to fetch popular movies when the component mounts
  // and set the movies state with the fetched data
  // and handle any errors that may occur during the fetch
  // and set loading state to false once the data is fetched

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchPopMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
      return;
    }
    setLoading(true);
    try {
      const data = await fetchSearch(searchText);
      setMovies(data);
    } catch (error) {
      console.log(error);
      setError("Failed to search movies");
      return;
    } finally {
      setLoading(false);
    }
    setSearchText("");
  };

  function handleTextChange(e) {
    setSearchText(e.target.value);
  }
  // Flow is user type in search box,onchange will update the saerch value and
  // this value is et to value field in the input and
  // when user click on submit then this is submitted to the whtvr logic
  return (
    <>
      <div className="py-8 w-[100%] box-border">
        <form
          onSubmit={formSubmit}
          className="max-w-[600px] flex box-border py-0 px-4 gap-4 mb-8 mx-auto"
        >
          <input
            className="flex-1 py-3 px-4 border-none rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Search for a movie"
            value={searchText}
            onChange={handleTextChange}
          />
          <input
            type="submit"
            value="Submit"
            className="py-3 px-6 bg-red-500 text-white rounded-lg font-medium transition-colors duration-200 whitespace-nowrap hover:bg-red-400"
          />
        </form>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4 w-[100%] box-border">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}
export default Home;
