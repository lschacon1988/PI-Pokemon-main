// import s from "../componet/style.module.css";
import s from "../style/filters.module.css"
export default function FilterCreate({ handle }) {
  return (
   
    <select onChange={(e) => handle(e)} className={s.select}>
      <option value="all">Filter Create</option>
      <option value="existente">Existente</option>
      <option value="created">Creado</option>
    </select>
  
  );
}

