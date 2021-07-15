import APITOKEN  from '../../token'
import { setChildAreas, setLoading, fetchTeams, getPlayer } from './action'
import shuffle from '../../helper/filterAreas'
export function areaById(payload:any){
    return function(dispatch:any, getState:any) {
        dispatch(setLoading(false))
        fetch('http://api.football-data.org/v2/areas/' + payload, {
            headers:{
                'X-Auth-Token' : APITOKEN
            } 
        })
        .then(response => response.json())
        .then(data => {
            dispatch(setLoading(true))
            dispatch(setChildAreas(data))
        })
        .catch(error => {
            console.log(error);
            
        })
    }
}

export function setTeams(){
    return function(dispatch:any, getState:any){
        dispatch(setLoading(false))
        fetch(' http://api.football-data.org/v2/teams', {
            headers:{
                'X-Auth-Token' : APITOKEN
            } 
        })
        .then(response => response.json())
        .then(data => {
            console.log(data, 'dataaa');
            
            let filtered = []
            for (let i = 0; i < data.teams.length; i++) {
                if(filtered.length < 20){
                    const random = shuffle(data.teams)
                    filtered.push(data.teams[random])
                }
            }
            dispatch(setLoading(true))
            dispatch(fetchTeams(filtered))
        })
        .catch(error => {
            console.log(error);
            
        })
    }
}

export function setPlayer(){
    return function(dispatch:any, getState:any) {
        const { clubsReducer } = getState()
        const number = clubsReducer.number
        dispatch(setLoading(false))
        fetch(' http://api.football-data.org/v2/players/'+number, {
            headers:{
                'X-Auth-Token' : APITOKEN
            } 
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getPlayer(data))
            dispatch(setLoading(true))
        })
        .catch(error => {
            console.log(error);
            
        })
    }
}