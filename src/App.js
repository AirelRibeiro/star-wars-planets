import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Table>Hello, App!</Table>
      <FilterInput />
    </PlanetsProvider>
  );
}

export default App;
