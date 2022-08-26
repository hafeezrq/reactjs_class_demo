import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat)
      return <div>Error: {this.state.errMessage}</div>;
    if (this.state.lat && !this.state.errMessage)
      return <div>Longitude: {this.state.lat}</div>;
    return <div>Loading......</div>;
  }
}

root.render(<App />);
