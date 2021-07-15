export default function shuffle(payload: any):any{
    const random:any  = Math.floor(Math.random() * payload.length) 
    return random
}