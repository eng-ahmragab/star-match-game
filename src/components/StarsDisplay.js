
function StarsDisplay({starsArray}) {
    
    return (
        <>
            {starsArray.map( (star) => <div key={star} className="star"/> ) }
        </>
    )
}

export default StarsDisplay
