import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import response from '../testData';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  const fetchPlanetsInformation = async () => {
    const planetsResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsData = await planetsResponse.json();
    setData(planetsData.results);
  };

  const context = { data, fetchPlanetsInformation, filterByName, setFilterByName };
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
