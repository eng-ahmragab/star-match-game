

function PlayAgain({resetGame, gameStatus}) {
    const message = gameStatus==="lost"? "Game Over" : "You Won!"
    const messageColor =  gameStatus==="lost"? "red" : "green"
    
    return (
        <div className="game-done">
        <div className="message" style={{ color: messageColor}}>
            { message }
        </div>
            <button onClick={resetGame}> 
                Play Again 
            </button>
        
        </div>
    )
}

export default PlayAgain
