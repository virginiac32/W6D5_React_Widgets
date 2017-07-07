import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);

  }

  componentDidMount() {
    this.ticker = setInterval(this.tick(), 1000);
  }

  componentWillUnmound() {
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
    return (
      <div>
        <h1>Clock</h1>
        <h2>{currentHour}:{currentMinute}:{currentSecond}</h2>
      </div>
    );
  }
}

export default 'Clock';
