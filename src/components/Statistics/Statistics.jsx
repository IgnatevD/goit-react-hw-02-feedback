import React, { Component } from "react";
import Section from "../Section/Section";
import Notification from "./StatisticsData/Notification/Notification";
import StatisticsData from "./StatisticsData/StatisticsData";

class Statistics extends Component {
  static defaultProps = {
    isOpen: false,
  };

  render() {
    return (
      <Section titel={"Статистика"}>
        {this.props.isOpen ? (
          <StatisticsData
            good={this.props.good}
            neutral={this.props.neutral}
            bad={this.props.bad}
            totall={this.props.totall}
          />
        ) : (
          <Notification message={"Нет отзывов о компании"} />
        )}
      </Section>
    );
  }
}

export default Statistics;
