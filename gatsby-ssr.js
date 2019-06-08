// import React from 'react';
// import { Provider } from 'react-redux';
// import createStore from './src/store';

// const loadDevTools = () =>
//   process.env.NODE_ENV === 'development' && window.devToolsExtension
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f;

// export default ({ element }) => (
//   <StyledApp>
//     <Provider store={createStore}>{element}</Provider>
//   </StyledApp>
// );

import wrapApp from './wrap-app';

export const wrapRootElement = wrapApp;
