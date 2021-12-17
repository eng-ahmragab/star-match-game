
import NumberButton from "./NumberButton"
import StarsDisplay from "./StarsDisplay";
import PlayAgain from "./PlayAgain";
import utils from "../js/utils"

import { useGameState } from "../hooks/useGameState";



function Game({ resetGame }) {

    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameStatus =
        availableNums.length === 0 
        ? "won"
        : secondsLeft === 0 ? "lost" : "active"


    const starsArray = utils.range(1, stars);
    const numbersArray = utils.range(1, 9);



    const getNumberStatus = (number) => {
        if (!availableNums.includes(number)) return "used";
        if (candidateNums.includes(number)) return candidatesAreWrong ? "wrong" : "candidate";
        return "available";
    };


    const handleNumberClick = (number, status) => {
        if (status === "used" || gameStatus !== "active") return;

        const newCandidateNums =
            status === "available" ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        setGameState(newCandidateNums);
    }



    return (
        <div className="game">

            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>

            <div className="body">

                <div className="left">
                    {
                        gameStatus !== "active" ?
                            <PlayAgain resetGame={resetGame} gameStatus={gameStatus} />
                            : <StarsDisplay starsArray={starsArray} />
                    }
                </div>

                <div className="right">
                    {numbersArray.map((number) =>
                        <NumberButton
                            key={number}
                            number={number}
                            status={getNumberStatus(number)}
                            handleNumberClick={handleNumberClick}

                        />
                    )}
                </div>

            </div>

            <div className="timer">Time Remaining: {secondsLeft}</div>

        </div>
    );
}

export default Game













