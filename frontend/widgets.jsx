import ReactDOM from 'react-dom';
import React from 'react';
import Clock from './clock';

class Root extends React.Component {
  render() {
    return (<div>
      <Clock />
    </div>);

  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('main');
  ReactDOM.render(<Root />, root);
});
