import { useState } from "react";

import Game from "./components/Game";

function App() {
    //this state will lead to unm,ount the game component and re-mount a new game!
    const [gameId, setGameId] = useState(1)
    const resetGame = () => setGameId(gameId+1);

    return (
        <div className="container mt-5">
        
            <Game key={gameId} resetGame={resetGame} />



        </div>
    );
}

export default App;
