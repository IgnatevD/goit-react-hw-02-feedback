import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import StatisticsData from "./StatisticsData/StatisticsData";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totall: 0,
    totallProcent: 0,
  };

  render() {
    return (
      <>
        <h1>Отзывы о компании</h1>
        <Section titel={"Пожалуйста оставте свой отзыв"}>
          <FeedbackOptions />
        </Section>
        <Section titel={"Пожалуйста оставте свой отзыв"}>
          {this.props.isOpen ? (
            <StatisticsData state={this.state} />
          ) : (
            <Notification message={"Нет отзывов о компании"} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
