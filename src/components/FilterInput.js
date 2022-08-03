import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterInput = () => {
  const { setFilterByName, filterByName } = useContext(PlanetsContext);
  const handleName = ({ target }) => setFilterByName(target.value);
  return (
    <input
      type="text"
      value={ filterByName }
      onChange={ handleName }
    />
  );
};

export default FilterInput;
