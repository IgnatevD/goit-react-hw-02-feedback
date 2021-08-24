import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plusFeedback = (option) => {
    this.setState((prevState) => {
      this.total();
      return { [option]: prevState[option] + 1 };
    });
  };

  total = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  positivePercentage = () => {
    return (
      (Number.parseInt(this.state.good) / Number.parseInt(this.total())) * 100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Отзывы о компании</h1>
        <Section titel={"Пожалуйста оставте свой отзыв"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            plusFeedback={this.plusFeedback}
          />
        </Section>
        <Section titel={"Пожалуйста оставте свой отзыв"}>
          {this.total() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message={"Нет отзывов о компании"} />
          )}
        </Section>
      </>
    );
  }
}

App.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};

export default App;
