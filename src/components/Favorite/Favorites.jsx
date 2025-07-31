import { useMovieContext } from "../context";
import Card from "../common/Card";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="min-h-screen px-6 py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Your Favorite Movies</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center">No movies added yet. Start adding some to see them here! YOU IDIOT🤣</p>
      ) : (
        <div className="grid grid-cols-3 gap-6 min-h-[500px]">
          {favorites.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
