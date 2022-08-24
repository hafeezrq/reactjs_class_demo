import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  let longitude = 0;
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position.coords.longitude),
    err => console.log(err)
  );
  return <div>Longitude: {longitude}</div>;
};

root.render(<App />);
