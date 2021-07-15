import { useSelector } from 'react-redux'

export default function ChildAreas(){
    const areasById = useSelector((state:any) => state.clubsReducer.areasById)
    const isLoading = useSelector((state:any) => state.loadingReducer.isLoading)
    if(!isLoading)return <h1>loading...</h1>
    return(
        <div className="grid align-start p-10">
            {
                areasById.childAreas !== undefined ? areasById.childAreas.length > 0 ? <TableList areas={areasById}/> : <p className="text-center text-5xl">there's no footballs club</p> : <p className="text-center text-5xl">there's no footballs club</p>
            }
        </div>
    )
}

function TableList(props:any):any{
    const { areas } = props;
    return (
        <table className="border-separate">
            <thead>
                <tr>
                    <th>Parent Area</th>
                    <th>Team</th>
                    <th>Country Code</th>
                </tr>
            </thead>
            {
                areas.childAreas.length <= 1 ? "there's no football club" : areas.childAreas.map((area:any) => {
                    return(
                        <tbody key={area.id} className="text-center">
                            <tr>
                                <td>{area.parentArea}</td>
                                <td>{area.name}</td>
                                <td>{area.countryCode}</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}