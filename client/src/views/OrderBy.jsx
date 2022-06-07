import s from "../style/filters.module.css";
export default function OrderBy({ handle, navigate }) {
  return (
    <div className={s.select}>
      <select className={s.select} onChange={(e) => handle(e)}>
        <option value="all">Order By Alphabetical</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <span className={s.span_selection}></span>
      <select className={s.select} onChange={(e) => navigate(e)}>
        <option value="default">Order By power</option>
        <option value="max">max</option>
        <option value="min">min</option>
      </select>
      <span className={s.span_selection}></span>
    </div>
  );
}
