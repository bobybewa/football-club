import { useSelector } from 'react-redux'
import './cardPlayer.css'
export default function CardPlayer(){
    const player = useSelector((state:any) => state.clubsReducer.player)
    const numberOfPlayers = useSelector((state:any) => state.clubsReducer.number)
    const isLoading = useSelector((state:any) => state.loadingReducer.isLoading)
    if(!isLoading)return <h1>loading...</h1>
    return(
        <div>
            {
                numberOfPlayers === 0 ? 
                <p className="text-center font-bold uppercase text-xl">press the button</p> :<div className="grid justify-center bg-green-500 p-10 rounded-md box">
                {/* <p>{JSON.stringify(numberOfPlayers)}</p> */}
                    <img src="" alt=""/>
                    <div className="text-xl">
                        <p>{player.name} - {player.position}</p>
                        <p>{player.countryOfBirth}, {player.dateOfBirth}</p>
                    </div>
                </div>
            }
        </div>

    )
}