import React from 'react';
import { Provider } from 'react-redux';
import StyledApp from './src/styles/StyledApp';

import createStore from './src/store';

export default ({ element }) => {
  const store = createStore();
  return (
    <StyledApp>
      <Provider store={store}>{element}</Provider>
    </StyledApp>
  );
};
