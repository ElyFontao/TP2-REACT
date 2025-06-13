// pages/Home.jsx
import MovieList from '../components/MovieList';

const movies = [
  { id: 1, title: 'La Vida es Bella', image: '/la vida es bella.jpg' },
  { id: 2, title: 'Comer, Rezar, Amar', image: '/comer rezar amar.jpg' },
  { id: 3, title: 'Escuela de Policias', image: '/la loca academia de policia.jpg' },
];

export default function Home({ watchlist, addToWatchlist }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Películas disponibles</h1>
      <MovieList movies={movies} watchlist={watchlist} addToWatchlist={addToWatchlist} />
    </div>
  );
}