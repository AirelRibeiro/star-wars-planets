import React, { useState } from 'react';

const SelectsOrderFilter = () => {
  const [columnFilter, setColumnFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  return (
    <div>
      <select
        name="column"
        data-testid="column-sort"
        // value={  }
        // onChange={  }
      >
        {columnFilter
          .map((option) => (<option key={ option } value={ option }>{ option }</option>))}
      </select>
      <fieldset>
        <legend>Select order</legend>
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
      </fieldset>
      <button
        type="button"
        data-testid="column-sort-button"
        // onClick={}
      >
        Ordenar
      </button>
    </div>
  );
};

export default SelectsOrderFilter;
