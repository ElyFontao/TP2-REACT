// components/MovieList.jsx
import MovieCard from './MovieCard';

export default function MovieList({ movies, watchlist, addToWatchlist }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} watchlist={watchlist} onAdd={addToWatchlist} />
      ))}
    </div>
  );
}