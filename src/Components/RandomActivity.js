import React, { useState } from 'react'

// async function randomActivity() {
//     // const response = await 
//     fetch('https://www.boredapi.com/api/activity/')
//     // console.log(response)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(e => e.message)
// }

const RandomActivity = () => {
    const [randomResult, setRandomResult] = useState("")
    
    async function getResult() {
        const result = await fetch('https://www.boredapi.com/api/activity/')
        const activities = await result.json()
        console.log(activities)
        // return activities
        setRandomResult(activities.activity)
    }

    // function setRandomResult {
    //     randomResult(getResult())
    // }

    function resultHandler(e) {
        getResult(e)
    }

    return (
        <>
            <button onClick={resultHandler}>
                Do the thinking for me plz
            </button>
            <p>
                {randomResult}
            </p>
        </>
    )
}

export default RandomActivity