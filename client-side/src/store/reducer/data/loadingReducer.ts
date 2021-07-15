const initialState:any = {
    isLoading: true
}

export default function reducer(state= initialState, { type, payload }:{type:string, payload:any}):void{
    switch(type){
        case "SET_LOADING":
            return {...state, isLoading: payload}
        default:
            return state
    }
}
