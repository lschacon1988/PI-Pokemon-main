import s from "../style/paginado.module.css";

export default function Paginado(props) {
  const { pokemons, paginado, limitPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / limitPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={s.pagination}>
      <li>
        {" "}
        <a className={s.page_items_previo} href="#">Previo</a>
      </li>
      {pageNumbers &&
        pageNumbers?.map((num) => (
          <li className={s.current_page} key={num}>
            {" "}
            <a onClick={() => paginado(num)}>{num}</a>{" "}
          </li>
        ))}
      <li>
        {" "}
        <a className={s.page_items_next} href="#">Next</a>
      </li>
    </nav>
  );
}
