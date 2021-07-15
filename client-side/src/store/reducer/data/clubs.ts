const initialState:any = {
    areas : [],
    teams : [],
    areasById : [],
    team : {},
    player: {},
    number: 0
}

export default function reducer(state= initialState, { type, payload }:{type:string, payload:any}):void{
    switch(type){
        case 'SETAREAS':
            return {...state, areas: payload};
        case 'SET_AREA_BY_ID':
            return {...state, areasById: payload};
        case 'SET_TEAMS':
            return {...state, teams: payload};
        case 'SET_TEAM':
            return {...state, team: payload};
        case 'SET_PLAYER':
            return {...state, player: payload};
        case 'SET_NUMBER_OF_PLAYER':
            return {...state, number: payload}
        default:
            return state
    }
}