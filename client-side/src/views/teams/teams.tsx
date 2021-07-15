import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTeams } from '../../store/reducer/actionCreator'
import { getDetail } from '../../store/reducer/action'
import { useHistory } from 'react-router-dom'
import './teams.css'
export default function TeamsPage(){
    const dataTeams = useSelector((state:any) => state.clubsReducer.teams)
    const isLoading = useSelector((state:any) => state.loadingReducer.isLoading)
    // const team = useSelector((state:any) => state.clubsReducer.team)
    const history = useHistory()
    const dispatch = useDispatch()
    
    function seeDetail(payload:number){
        history.push('/teams/' + payload)
        const team:any = dataTeams.filter((team:any) => team.id === payload) 
        // console.log(team, "<<<");
        console.log(dataTeams[0]);
        
        
        dispatch(getDetail(team))
    }

    useEffect(() => {
        dispatch(setTeams())
    },[])
    

    if(!isLoading)return <h1 className="text-center text-5xl">loading...</h1>
    return(
        <div className="grid grid-cols-auto tablet:grid tablet:grid-cols-auto laptop:grid laptop:grid-cols-2 desktop:grid desktop:grid-cols-4 lg:grid-rows-auto p-10">
            {/* {JSON.stringify(team)} */}
            {
                dataTeams.map((team:any) => {
                    return(
                        <div key={team.id} className="bg-green-500 grid justify-center align-center p-8 m-8 rounded-lg">
                            <img className="img grid justify-self-center align-self-center" src={team.crestUrl} alt=""/>
                            <p className="text-center text-xl">{team.name}</p>
                            <button 
                            onClick={() => seeDetail(team.id)}
                            className="btnDetailClub grid justify-self-center align-self-center font-bold bg-green-400 mt-4 rounded-lg w-44 p-4">Detail Club</button>
                        </div>
                    )
                })
            }
        </div>
    )
}