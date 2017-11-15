import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/style.css';

import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
