import Board from './components/Board';
import { GameStore } from './models/game-store';

const game = new GameStore();

function App() {
  return (
    <div className="text-center">
      <header className="bg-black flex flex-col items-center text-3xl justify-center min-h-screen text-white">
        <Board game={game} />
      </header>
    </div>
  );
}

export default App;
