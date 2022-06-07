import s from "../style/filters.module.css";
export default function OrderBy({ handleOrderAlf,
  halndelPow }) {
  return (
    <div className={s.div}>
      <select className={s.select} onChange={(e) => handleOrderAlf(e)}>
        <option value="all">Order By Alphabetical</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select className={s.select} onChange={(e) => halndelPow(e)}>
        <option value="default">Order By power</option>
        <option value="max">max</option>
        <option value="min">min</option>
      </select>
    </div>
  );
}
