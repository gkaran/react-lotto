import GameBoard from './components/GameBoard';
import { GameStore } from './models/game-store';

const game = new GameStore();

function App() {
  return (
    <div className="text-center">
      <header className="bg-black flex flex-col items-center text-3xl justify-center min-h-screen text-white">
        <GameBoard game={game} />
      </header>
    </div>
  );
}

export default App;
