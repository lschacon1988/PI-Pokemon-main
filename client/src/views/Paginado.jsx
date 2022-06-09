
import s from "../style/paginado.module.css";

export default function Paginado(props) {
  const { pokemons, paginado, limitPage, next, prev, currentPokemos } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / limitPage); i++) {
    pageNumbers.push(i);    
  }
  let className = s.current_page


  return (
    <nav className={s.pagination}>
      <li  onClick={(e)=> prev(e)} className={s.page_items_previo}>
        {" "}
        <a  href="#">Prev</a>
      </li>
      {pageNumbers &&
        pageNumbers?.map((num) => (
          <li onClick={() => paginado(num)} className={className} id={num} key={num}>
            {" "}
            <a >{num}</a>{" "}
          </li>          
        ))}
        
      <li disabled={currentPokemos< 12} onClick={(e)=> next(e)}  className={s.page_items_next} >
        {" "}
        <a  href="#">Next</a>
      </li>
    </nav>
  );
}
