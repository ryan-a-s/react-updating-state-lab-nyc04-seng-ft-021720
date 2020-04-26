// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => { 
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render() {
    return (
      <button onClick={this.handleClick} value={this.state.timesClicked}>{this.state.timesClicked}</button>
    )
  }
};

export default DigitalClicker;