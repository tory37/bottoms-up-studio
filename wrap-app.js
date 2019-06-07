import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import StyledApp from './src/styles/StyledApp';
import theme from './src/styles/theme';

import createStore from './src/store';

export default ({ element }) => {
  const store = createStore();
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <Provider store={store}>{element}</Provider>
      </ThemeProvider>
    </StyledApp>
  );
};
