import "./gameResult.css"
import { useEffect } from "react"
import Create from "../../../api/create"
export default function GameResult({win,gameScore,player}) {

    useEffect(() => {
        if(player.isOldPlayer){
                console.log(player)

        }else {
            console.log(false)
            Create(player.name, player.avatar,gameScore)

        }
        
    }, [])
    
    return (
        <div className="gameResult">
        
            {"win : " + win }
            {"game score : " +gameScore }
        </div>
    )
}
