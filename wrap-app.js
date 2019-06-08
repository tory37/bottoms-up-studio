import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import theme from './src/styles/theme';
import './src/styles/globals.css';

import createStore from './src/store';

export default ({ element }) => {
  const store = createStore();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{element}</Provider>
    </ThemeProvider>
  );
};
