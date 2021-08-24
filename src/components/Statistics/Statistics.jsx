import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li>
        <span>Отлично -</span>
        <span className={s.fedbackStatistics}>{good}</span>
      </li>
      <li>
        <span>Средне -</span>
        <span className={s.fedbackStatistics}>{neutral}</span>
      </li>
      <li>
        <span>Плохо -</span>
        <span className={s.fedbackStatistics}>{bad}</span>
      </li>
      <li>
        <span>Всего -</span>
        <span className={s.fedbackStatistics}>{total}</span>
      </li>
      <li>
        <span>Позитивных отзывов -</span>
        <span className={s.fedbackStatistics}>
          {Number.parseInt(positivePercentage)}%
        </span>
      </li>
    </ul>
  );
};

export default Statistics;
