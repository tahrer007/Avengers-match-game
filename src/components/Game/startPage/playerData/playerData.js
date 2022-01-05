import "./playerData.css"
export default function playerData({name,avatar,lastscore,isOldPlayer}) {
    return (
        <div>
                <div>welcome {isOldPlayer &&"back"} {name}</div>
        </div>
    )
}
