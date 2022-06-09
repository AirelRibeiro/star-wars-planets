import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const SelectsOrderFilter = () => {
  const [columnFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const { selectOrderFilter, setSelectOrderFilter } = useContext(PlanetsContext);

  const handleSelectChange = ({ target }) => {
    const newSelectFilter = [{ ...selectOrderFilter[0], [target.name]: target.value }];
    setSelectOrderFilter(newSelectFilter);
  };

  return (
    <div>
      <fieldset>
        <legend>Select order</legend>
        <select
          name="column"
          data-testid="column-sort"
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
            data-testid="column-sort-input-asc"
            id="ASC"
            name="sort"
            value="ASC"
          />
          Ascendente
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="DESC"
            name="sort"
            value="DESC"
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </fieldset>
    </div>
  );
};

export default SelectsOrderFilter;
