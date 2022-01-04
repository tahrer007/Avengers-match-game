import "./gameResult.css"
export default function GameResult({win,gameScore}) {
    return (
        <div className="gameResult">
            {"win : " + win }
            {"game score : " +gameScore }
        </div>
    )
}
