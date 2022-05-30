import s from '../componet/style.module.css'

export default function Paginado(props) {
  const { pokemons, paginado,limitPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / limitPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={s.ul} >
        {pageNumbers &&
          pageNumbers?.map((num) =>(<li className={s.number} key={num}> <a  onClick={() => paginado(num)}>{num}</a> </li>)
          )}
      </ul>
    </nav>
  );
}
