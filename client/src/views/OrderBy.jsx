import s from "../componet/style.module.css";

export default function OrderBy({handle, navigate}) {
  return (
    <div>
      <select className={s.select} onChange={(e)=> handle(e)}>
        <option value="all">Order By Alphabetical</option>
        <option value="asc">Acendente</option>
        <option value="desc">descendente</option>
      </select>

      <select className={s.select} onChange={(e)=> navigate(e)}>
        <option value="default">Order By power</option>
        <option value="max">max</option>
        <option value="min">min</option>
      </select>
    </div>
  );
}
