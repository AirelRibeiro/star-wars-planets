import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Table>Hello, App!</Table>
    </PlanetsProvider>
  );
}

export default App;
