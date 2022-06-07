
import s from "../style/paginado.module.css";

export default function Paginado(props) {
  const { pokemons, paginado, limitPage } = props;
 

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / limitPage); i++) {
    pageNumbers.push(i);    
  }
  let className = s.current_page


  return (
    <nav className={s.pagination}>
      <li className={s.page_items_previo}>
        {" "}
        <a  href="#">Prev</a>
      </li>
      {pageNumbers &&
        pageNumbers?.map((num) => (
          <li className={className} id={num} key={num}>
            {" "}
            <a onClick={() => paginado( num)}>{num}</a>{" "}
          </li>          
        ))}
        
      <li  className={s.page_items_next} >
        {" "}
        <a  href="#">Next</a>
      </li>
    </nav>
  );
}
