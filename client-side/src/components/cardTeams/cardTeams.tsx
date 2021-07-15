import './cardTeams.css'
import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAreas, setLoading } from '../../store/reducer/action'
import { areaById } from '../../store/reducer/actionCreator'
import { useHistory } from 'react-router-dom'
import shuffle from '../../helper/filterAreas'
import APITOKEN from '../../token'
export default function CardTeams(){
    const history = useHistory()
    const token = APITOKEN
    const areas = useSelector((state:any) => state.clubsReducer.areas)
    const screenLoading = useSelector((state:any) => state.loadingReducer.isLoading)
    const dispatch = useDispatch()
    function getChildAreas(id:any){
        history.push('/areas/'+id)
        dispatch(areaById(id))
    }
    useEffect(() => {
        dispatch(setLoading(false))
        fetch('http://api.football-data.org/v2/areas', {
            headers:{
                'X-Auth-Token' : token
            } 
        })
        .then(response => response.json())
        .then(data => {
            let filteringAreas:any = data.areas
            let filtered:any = [] 
            for (let i = 0; i < filteringAreas.length; i++) {
                if(filtered.length < 20){
                    const random = shuffle(filteringAreas)
                    filtered.push(filteringAreas[random])
                }
            }
            dispatch(fetchAreas(filtered))
            dispatch(setLoading(true))
        })
    },[])
    if(!screenLoading){
        return <h1 className="text-center text-5xl">loading....</h1>
    }
    return(
        <div className="grid grid-cols-auto tablet:grid tablet:grid-cols-auto laptop:grid laptop:grid-cols-2 desktop:grid desktop:grid-cols-4 lg:grid-rows-auto p-10">
                {
                    areas.map((area:any) => {
                        return (
                            <div key={area.id} className="card card-bg  bg-green-600 grid p-4 laptop:p-10 flex">
                                <p className="font-bold italic text-base title text-center">See footballs club in {area.name}</p>
                                <button className="font-bold tracking-widest bg-green-400 mt-4  w-24 justify-self-center rounded-lg" onClick={() => getChildAreas(area.id)}>See All</button>
                            </div>
                        )
                    })
                }
        </div>
    )
}