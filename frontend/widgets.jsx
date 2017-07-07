import ReactDOM from 'react-dom';
import React from 'react';
import Clock from './clock';
import Weather from './weather';

class Root extends React.Component {
  render() {
    return (
      <div>
      <Clock />
      <Weather />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('main');
  ReactDOM.render(<Root />, root);
});
