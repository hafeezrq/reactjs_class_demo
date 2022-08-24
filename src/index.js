import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position.coords.longitude),
      err => console.log(err)
    );
    return <div>Longitude:</div>;
  }
}

root.render(<App />);
