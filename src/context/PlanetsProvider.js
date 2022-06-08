import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import response from '../testData';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [selectNumberFilter, setSelectNumberFilter] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: 0,
  }]);
  const [dataForFilter, setDataForFilter] = useState([]);
  const [selectFiltersAvailables, setSelectFiltersAvailables] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const fetchPlanetsInformation = async () => {
    const planetsResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsData = await planetsResponse.json();
    setData(planetsData.results);
    setDataForFilter(planetsData.results);
  };

  useEffect(() => {
    fetchPlanetsInformation();
  }, []);

  const context = {
    data,
    fetchPlanetsInformation,
    filterByName,
    setFilterByName,
    selectNumberFilter,
    setSelectNumberFilter,
    dataForFilter,
    setDataForFilter,
    selectFiltersAvailables,
    setSelectFiltersAvailables,
  };

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
