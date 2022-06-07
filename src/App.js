import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
import SelectsFilter from './components/SelectsFilter';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterInput />
      <SelectsFilter />
      <Table>Hello, App!</Table>
    </PlanetsProvider>
  );
}

export default App;
