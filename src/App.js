import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterInput from './components/FilterInput';
import SelectsNumberFilter from './components/SelectsNumberFilter';
import SelectsOrderFilter from './components/SelectsOrderFilter';
import Header from './components/Header';
import './style/App.css';

function App() {
  return (
    <PlanetsProvider>
      <div className="body">
        <Header />
        <FilterInput />
        <div className="selects-div">
          <SelectsNumberFilter />
          <SelectsOrderFilter />
        </div>
        <Table>Hello, App!</Table>
      </div>
    </PlanetsProvider>
  );
}

export default App;
