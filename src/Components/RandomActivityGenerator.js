import React, { useState } from 'react'

const RandomActivityGenerator = () => {
    const [randomActivity, setRandomActivity] = useState("")
    const [randomActivityParticipants, setRandomActivityParticipants] = useState("")
    const [randomActivityPrice, setRandomActivityPrice] = useState("")
    
    async function getResult() {
        const result = await fetch('https://www.boredapi.com/api/activity/')
        const activities = await result.json()
        console.log(activities)
        setRandomActivity(activities.activity)
        setRandomActivityParticipants(activities.participants)
        setRandomActivityPrice(activities.price)
    }

    function resultHandler(e) {
        getResult(e)
    }

    function changePriceToDollars(scale) {
        if (scale === 0) {
            return "Free"
        } 
        else if (scale <= 0.2) {
            return "$$"
        }
        else if (scale <= 0.4) {
            return "$$$"
        }
        else if (scale <= 0.6) {
            return "$$$"
        }
        else if (scale <= 0.8) {
            return "$$$$"
        }
        else if (scale <= 1) {
            return "$$$$$"
        }
    }

    return (
        <>
            <button onClick={resultHandler}>
                Do the thinking for me plz
            </button>
            {randomActivity && 
                (<p><strong>Activity:</strong> {randomActivity}</p>)}
            {randomActivityParticipants && 
                (<p><strong>Participants:</strong> {randomActivityParticipants}</p>)}
            {(changePriceToDollars(randomActivityPrice)) && 
                (<p><strong>Price:</strong> {changePriceToDollars(randomActivityPrice)}</p>)}
        </>
    )
}

export default RandomActivityGenerator