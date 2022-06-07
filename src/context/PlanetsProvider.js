import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import response from '../testData';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [selectFilter, setSelectFilter] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  }]);

  const fetchPlanetsInformation = async () => {
    const planetsResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsData = await planetsResponse.json();
    setData(response.results);
  };

  const context = {
    data,
    fetchPlanetsInformation,
    filterByName,
    setFilterByName,
    selectFilter,
    setSelectFilter };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
