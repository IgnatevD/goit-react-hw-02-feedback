import React, { Component } from "react";
import s from "./StatisticsData.module.css";

class StatisticsData extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totall: 0,
  };
  render() {
    return (
      <ul className={s.list}>
        <li>
          <span>Отлично -</span>
          <span className={s.fedbackStatistics}>{this.props.good}</span>
        </li>
        <li>
          <span>Средне -</span>
          <span className={s.fedbackStatistics}>{this.props.neutral}</span>
        </li>
        <li>
          <span>Плохо -</span>
          <span className={s.fedbackStatistics}>{this.props.bad}</span>
        </li>
        <li>
          <span>Всего -</span>
          <span className={s.fedbackStatistics}>{this.props.totall}</span>
        </li>
        <li>
          <span>Позитивных отзывов -</span>
          <span className={s.fedbackStatistics}>
            {Number.parseInt((this.props.good / this.props.totall) * 100)}%
          </span>
        </li>
      </ul>
    );
  }
}

export default StatisticsData;
