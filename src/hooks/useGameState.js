//custom hook for managing the state

import {useState, useEffect} from "react";
import utils from "../js/utils"



export function useGameState() {
    const numbersArray = utils.range(1,9);
    const [stars, setStars] = useState(utils.random(1,9));
    const [availableNums, setAvilableNums] = useState(numbersArray);
    const[candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(30);

    
    useEffect( ()=> {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout( ()=> {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);

            return ()=> clearTimeout(timerId);
        }
        
    }, [secondsLeft, availableNums.length]);



    const setGameState = (newCandidateNums) => {
        //if sum of the candidates != the stars, then continue playing, else round won and redraw stars
        if (utils.sum(newCandidateNums) !== stars){
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter ( num => !newCandidateNums.includes(num) );
            setAvilableNums(newAvailableNums);
            setCandidateNums ([]);
            //redraw numbers from what's avilable
            setStars( utils.randomSumIn(newAvailableNums, 9) )
        }
    }


    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};