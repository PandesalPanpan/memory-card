import { useEffect, useState} from "react"


export default function Scoreboard({
    currentScore
}) {
    const [bestScore, setBestScore] = useState(0);
    useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }, [currentScore])

    return (
        <div className="scoreboard">
            <h1>Pokemon Memory Card</h1>
            <div className="scoreboard-scores">
                <h2>Score: {currentScore}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
        </div>
    )
}