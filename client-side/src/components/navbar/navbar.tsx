import { navbarList } from '../../store/navbar/nav'
import { useHistory, useLocation} from 'react-router-dom'
import './navbar.css'
export default function Navbar(){
    const history = useHistory()
    const l = useLocation()
    function changePage(payload:string){
        history.push(payload)
    }
    return(
        <div className="bg grid justify-center align-center">
            <ul className="navbarList flex flex-row text-white font-bold ">
                {
                    navbarList.map((nav,i) =>{
                        const url = nav.link
                        return (
                            <li 
                            id={l.pathname === nav.link ? "active" : ''}
                            className="m-4 p-2 rounded w-auto" key={i} onClick={() => changePage(url)}>{nav.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}