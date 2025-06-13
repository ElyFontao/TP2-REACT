// components/MovieCard.jsx
import { PlusCircle, CheckCircle } from 'lucide-react';

export default function MovieCard({ movie, onAdd, watchlist }) {
  const alreadyAdded = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col items-start gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
        <button
          onClick={() => onAdd(movie)}
          disabled={alreadyAdded}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition 
            ${alreadyAdded ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600 text-black'}`}
        >
          {alreadyAdded ? <CheckCircle size={18} /> : <PlusCircle size={18} />}
          {alreadyAdded ? 'Ya en mi lista' : 'Agregar a mi lista'}
        </button>
      </div>
    </div>
  );
}
