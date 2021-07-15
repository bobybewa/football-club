import { useSelector } from 'react-redux'
import ChildAreas from '../../components/table/childArea'
export default function ChildAreasPage(){
    const isLoading = useSelector((state:any) => state.loadingReducer.isLoading)
    if(!isLoading)return <h1>loading...</h1>
    return(
        <ChildAreas/>
    )
}