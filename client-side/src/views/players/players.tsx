import shuffle from '../../helper/filterAreas'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getNumberPlayer } from '../../store/reducer/action'
import { useDispatch,useSelector } from 'react-redux'
import { setPlayer } from '../../store/reducer/actionCreator'
import CardPlayer from '../../components/cardPlayer/cardPlayer'
export default function GetPlayerPage(){
    const [number, setNumber] =useState(1000)
    const numberOfPlayers:any = []
    const dispatch = useDispatch()
    const player = useSelector((state:any) => state.clubsReducer.player)
    const isLoading = useSelector((state:any) => state.loadingReducer.isLoading)
    for (let i = 0; i < number; i++) {
        if(numberOfPlayers.length < number){
            numberOfPlayers.push(i)
        }
    }
    let luckyPlayer:any = shuffle(numberOfPlayers)
    function randomNumber(){
        luckyPlayer = shuffle(numberOfPlayers)
        dispatch(getNumberPlayer(luckyPlayer))
        dispatch(setPlayer())
    }
    if(!isLoading) return <h1>please wait...</h1>
    return(
        <div className="grid justify-center">
            <button className="m-10 bg-green-600 font-bold text-2xl p-4 rounded-lg" onClick={randomNumber}>Get Player</button>
            <CardPlayer/>
        </div>
    )
}