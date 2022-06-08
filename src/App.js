import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
import SelectsNumberFilter from './components/SelectsNumberFilter';
import SelectsOrderFilter from './components/SelectsOrderFilter';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterInput />
      <SelectsNumberFilter />
      <SelectsOrderFilter />
      <Table>Hello, App!</Table>
    </PlanetsProvider>
  );
}

export default App;
