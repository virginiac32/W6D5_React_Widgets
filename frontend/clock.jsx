import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);

  }

  componentDidMount() {
    this.ticker = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.ticker.clearInterval();
    this.ticker = 0;
  }

  tick () {
    const time = new Date();
    this.setState({time});
  }

  render () {
    const currentHour = this.state.time.getHours();
    const currentMinute = this.state.time.getMinutes();
    const currentSecond = this.state.time.getSeconds();
    const month = this.state.time.getMonth() + 1;
    const day = this.state.time.getDate();
    const year = this.state.time.getFullYear();
    return (
      <div>
        <h1>Clock</h1>
          <ul>
            <li>
              <span>Date: {month}/{day}/{year}</span>
            </li>
            <li>
              <span>Time: {currentHour}:{currentMinute}:{currentSecond}</span>
            </li>
          </ul>
      </div>
    );
  }
}
