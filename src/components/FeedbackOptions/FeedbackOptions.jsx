import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totall: 0,
    isOpen: false,
    positivePercentage: 0,
  };

  plusGoodFeedback = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
      isOpen: true,
      totall: state.totall + 1,
    }));
  };

  plusNeutralFeedback = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
      isOpen: true,
      totall: state.totall + 1,
    }));
  };

  plusBadFeedback = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
      isOpen: true,
      totall: state.totall + 1,
    }));
  };
  render() {
    return (
      <>
        <div className={s.conteiner}>
          <button type="button" onClick={this.plusGoodFeedback}>
            Отлично
          </button>
          <button type="button" onClick={this.plusNeutralFeedback}>
            Средне
          </button>
          <button type="button" onClick={this.plusBadFeedback}>
            Плохо
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          totall={this.state.totall}
          isOpen={this.state.isOpen}
        />
      </>
    );
  }
}

export default FeedbackOptions;
