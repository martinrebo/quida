import React from 'react';
import Routes from './Router/Router';

import { ServicesProvider } from './Store/Context'

function App() {
  return (
    <ServicesProvider>
      <Routes/>
    </ServicesProvider>
  );
}

export default App;
