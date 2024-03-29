import FilterCreate from "./FilterCreate";
import FilterType from "./FilterType";
import OrderBy from "./OrderBy";
import Search from "./Search";
import s from '../style/nav.module.css'
import { Link } from "react-router-dom";



export default function Nav({navigate ,handle,handleOrderAlf,
    halndelPow, page}){


    return(
        <nav className={s.nav}>
            <label className={s.logo}><Link className={s.link} to='/'>P</Link>okemons</label>
            <ul className={s.ul}>
               <Link to="/pokemons"> <li className={s.items}><button>Crear un Pokemon</button></li> </Link>
                <li className={s.items}><a><OrderBy handleOrderAlf={handleOrderAlf} halndelPow={halndelPow}/></a> </li>
                <li className={s.items}><a><FilterType navigate={navigate}/></a> </li>
                <li className={s.items}><a ><FilterCreate handle={handle}/></a></li>
                <li className={s.items}><a ><Search page={page}/></a></li>
            </ul>
        </nav>
    )
}