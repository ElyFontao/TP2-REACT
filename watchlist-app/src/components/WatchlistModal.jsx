import { X, Trash2, Film } from 'lucide-react';

export default function WatchlistModal({ watchlist, onClose, onRemove }) {
  const isEmpty = watchlist.length === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-[#1e293b] text-white rounded-xl p-6 w-11/12 max-w-md animate-fade-in shadow-xl">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-600 pb-2">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Film className="w-6 h-6 text-yellow-400" />
            Mi lista de seguimiento
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Lista o mensaje vacío */}
        {isEmpty ? (
          <div className="text-center text-gray-300 py-10">
            <Film className="mx-auto mb-4 w-10 h-10" />
            <p className="font-semibold text-lg">Tu lista de seguimiento está vacía</p>
            <p className="text-sm mt-1">Añade películas para empezar a verlas.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {watchlist.map((movie) => (
              <li key={movie.id} className="flex items-center justify-between bg-[#0f172a] border border-yellow-500 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <img src={movie.image} alt={movie.title} className="w-12 h-16 object-cover rounded" />
                  <span className="font-medium">{movie.title}</span>
                </div>
                <button
                  onClick={() => onRemove(movie.id)}
                  className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                >
                  <Trash2 size={16} />
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

