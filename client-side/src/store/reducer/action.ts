import { SETAREAS, SETAREABYID, SETLOADING, SETTEAMS, SETTEAM, SETNUMBERPLAYER, SETPLAYER} from'./actionType'

export function fetchAreas(payload:any){
    return { type: SETAREAS, payload: payload}
}

export function setChildAreas(payload:any){
    return { type: SETAREABYID, payload: payload}
}

export function setLoading(payload:boolean){
    return { type: SETLOADING, payload: payload}
}

export function fetchTeams(payload:any){
    return { type: SETTEAMS, payload: payload}
}

export function getDetail(payload:any){
    return { type: SETTEAM, payload: payload}
}

export function getNumberPlayer(payload:any){
    return { type: SETNUMBERPLAYER, payload: payload}
}

export function getPlayer(payload:any){
    return { type: SETPLAYER, payload: payload}
}