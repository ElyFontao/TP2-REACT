// components/Header.jsx
export default function Header({ onOpenWatchlist }) {
  return (
    <header className="relative flex justify-between items-center bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6 py-4 rounded-xl shadow mb-6">
      <h1 className="text-2xl font-bold tracking-wide">🎬 Mi Lista de Películas</h1>
      <button
        onClick={onOpenWatchlist}
        className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        Ver mi lista
      </button>
    </header>
  );
}