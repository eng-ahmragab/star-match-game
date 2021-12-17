
function NumberButton({number, status, handleNumberClick}) {
    // Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};


    return (
        <button 
            className="number" 
            onClick={ ()=> handleNumberClick (number, status) }
            style={{ backgroundColor : colors[status] }}
        >
        
            {number}
        
        </button>
    )
}

export default NumberButton