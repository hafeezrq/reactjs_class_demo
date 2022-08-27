import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends Component {
  state = { lat: null, errMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat)
      return <div>Error: {this.state.errMessage}</div>;
    if (this.state.lat && !this.state.errMessage)
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    return <Spinner message='Please allow the location request' />;
  }
}

root.render(<App />);
