// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WatchlistModal from './components/WatchlistModal';
import useWatchlist from './hooks/useWatchlist';
import { useState } from 'react';

export default function App() {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <Header onOpenWatchlist={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <Home watchlist={watchlist} addToWatchlist={addToWatchlist} />
      </main>
      <Footer />
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
        />
      )}
    </div>
  );
}