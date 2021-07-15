import { useDispatch, useSelector } from 'react-redux'

export default function TeamPage(){
    const data = useSelector((state:any) => state.clubsReducer.team)
    const team = data[0]
    return(
        <div className="grid">
            {/* <h1>{JSON.stringify(data)}</h1> */}
            <img className="grid justify-self-center mt-4 mb-10 rounded-full w-64 " src={team.crestUrl} alt=""/>
            <p className="text-center text-4xl mb-8 font-bold font">{team.name}</p>
            <div className="p-10 leading-loose tablet:hidden">
                <p>Address - {team.address}</p>
                <p>Phone - {!team.phone ? "" : team.phone }</p>
                <p>Email - {team.email}</p>
                <p>since - {team.founded}</p>
                <p>Stadium - {team.venue}</p>
            </div>
            <div className="grid justify-center hidden tablet:contents">
                <table className="table-auto border-collapse border border-green-800">
                    <thead>
                        <tr>
                            <th className="border border-green-600">Address</th>
                            <th className="border border-green-600">Phone</th>
                            <th className="border border-green-600">Email</th>
                            <th className="border border-green-600">Since</th>
                            <th className="border border-green-600">Stadium</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td className="border border-green-600">{team.address}</td>
                            <td className="border border-green-600">{team.phone == null ? "-" : team.phone }</td>
                            <td className="border border-green-600">{team.email}</td>
                            <td className="border border-green-600">{team.founded}</td>
                            <td className="border border-green-600">{team.venue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-center mt-20 text-4xl font-bold">{team.squad == undefined ? "nothin players here" : ""}</p>
        </div>
    )
}