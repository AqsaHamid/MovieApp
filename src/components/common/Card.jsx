import { useMovieContext } from "../context";

function Card({ movie }) {
  const { addfvrt, removefvrt, isFavorite } = useMovieContext();
  const fvrt = isFavorite(movie.id);

  const handlefvrt = (e) => {
    e.preventDefault();
    if (fvrt) removefvrt(movie.id);
    else addfvrt(movie)
  };
  return (
    <>
      <div className="relative rounded-lg overflow-hidden bg-neutral-900 transition-transform duration-200 h-[100%] flex flex-col md:text-sm hover:-translate-y-1.5">
        <div className="relative aspect-[2/3] w-[100%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie poster"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4  hover:opacity-100">
            <button
              onClick={handlefvrt}
              className={`absolute top-4 right-4  text-2xl  p-2 bg-white/20 rounded-full w-[40px] h-[40px] flex items-center justify-center transition-colors duration-200   md:w-[32px] md:h-[32px] md:text-lg ${
                fvrt ? "text-red-600" : "text-white"
              }`}
            >
              ♥
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className=" text-white text-base m-0">{movie.title}</h3>
          <p className="text-white text-sm">
            {movie.release_date?.split("-")[0]}
          </p>
        </div>
      </div>
    </>
  );
}
export default Card;
