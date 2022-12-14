import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsInformation from '../API/fetchApi';

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
  const [selectOrderFilter, setSelectOrderFilter] = useState([{
    column: 'population',
    sort: 'ASC',
  }]);
  const [usedFilters, setUsedFilters] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchPlanetsInformation(setData, setDataForFilter);
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
    selectOrderFilter,
    setSelectOrderFilter,
    usedFilters,
    setUsedFilters,
    isFiltered,
    setIsFiltered,
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
