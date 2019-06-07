import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import StyledApp from './src/styles/StyledApp';

// const loadDevTools = () =>
//   process.env.NODE_ENV === 'development' && window.devToolsExtension
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f;

export default ({ element }) => (
  <StyledApp>
    <Provider store={store}>{element}</Provider>
  </StyledApp>
);
