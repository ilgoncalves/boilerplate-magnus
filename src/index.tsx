import React, { FC } from 'react';
import Navigation from './navigation';
import { Provider } from './providers';

const App: FC = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};

export default App;
