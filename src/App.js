import React from 'react';
import Routes from './Router/Router';
import './App.css'

import { ServicesProvider } from './Store/Context'
import Layout from './Layout/Layout';

function App() {
  return (
    <ServicesProvider>
      <Layout>
        <Routes />
      </Layout>
    </ServicesProvider>
  );
}

export default App;
