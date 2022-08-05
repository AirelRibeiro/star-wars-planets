import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../style/SelectOrderFilter.css';

const SelectsOrderFilter = () => {
  const [columnFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const {
    selectOrderFilter,
    setSelectOrderFilter,
    dataForFilter,
    setDataForFilter } = useContext(PlanetsContext);

  const handleSelectChange = ({ target }) => {
    const newSelectFilter = [{ ...selectOrderFilter[0], [target.name]: target.value }];
    setSelectOrderFilter(newSelectFilter);
  };

  const orderAscSort = (column) => {
    const magicNumber = -1;
    const newPlanets = [...dataForFilter]
      .sort((planetA, planetB) => {
        if (planetA[column] === 'unknown') return magicNumber;
        if (planetB[column] === 'unknown') return magicNumber;
        if (Number(planetA[column]) > Number(planetB[column])) return 1;
        if (Number(planetA[column]) < Number(planetB[column])) return magicNumber;
        return 0;
      });
    setDataForFilter(newPlanets);
  };

  const orderDescSort = (column) => {
    const magicNumber = -1;
    const newPlanets = [...dataForFilter]
      .sort((planetA, planetB) => {
        if (planetA[column] === 'unknown') return 1;
        if (planetB[column] === 'unknown') return magicNumber;
        if (Number(planetA[column]) > Number(planetB[column])) return magicNumber;
        if (Number(planetA[column]) < Number(planetB[column])) return 1;
        return 0;
      });
    setDataForFilter(newPlanets);
  };

  const sortPlanets = () => {
    const { column, sort } = selectOrderFilter[0];
    if (sort === 'ASC') {
      orderAscSort(column);
    } else {
      orderDescSort(column);
    }
  };

  return (
    <div className="filter-order-div">
      <legend>ORDENATION FILTERS</legend>
      <select
        name="column"
        value={ selectOrderFilter[0].column }
        onChange={ handleSelectChange }
      >
        {columnFilter
          .map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>))}
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          onChange={ handleSelectChange }
          id="ASC"
          name="sort"
          value="ASC"
        />
        ASCENDING
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          onChange={ handleSelectChange }
          id="DESC"
          name="sort"
          value="DESC"
        />
        DESCENDING
      </label>
      <button
        type="button"
        onClick={ sortPlanets }
      >
        Ordenar
      </button>
    </div>
  );
};

export default SelectsOrderFilter;
