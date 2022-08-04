import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../style/FilterInput.css';

const FilterInput = () => {
  const { setFilterByName, filterByName } = useContext(PlanetsContext);
  const handleName = ({ target }) => setFilterByName(target.value);
  return (
    <div className="filter-by-name-div">
      <input
        type="text"
        value={ filterByName }
        onChange={ handleName }
        placeholder="Busque seu planeta pelo nome"
      />
    </div>
  );
};

export default FilterInput;
