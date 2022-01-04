export default function GameResult({win,gameOver}) {
    return (
        <div className="gameResult">
            {"win : " + win + "lose : "  + gameOver}
        </div>
    )
}
