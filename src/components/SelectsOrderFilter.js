import React, { useState } from 'react';

const SelectsOrderFilter = () => {
  const [columnFilter, setColumnFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  return (
    <div>
      <select
        name="column"
        data-testid="column-sort"
        value={  }
        onChange={  }
      >
        {columnFilter
          .map((option) => (<option key={ option } value={ option }>{ option }</option>))}
      </select>
      <fieldset>
        <legend>Select order</legend>
          <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="drone"
          value="ASC" />
          <label for="huey">Huey</label>
          <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="drone"
          value="DESC" />
          <label for="huey">Huey</label>
      </fieldset>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={}
      >
        Ordenar
      </button>
    </div>
  );
};

export default SelectsOrderFilter;
