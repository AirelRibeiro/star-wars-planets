import React, { useState } from 'react';

const SelectsOrderFilter = () => {
  const [columnFilter, setColumnFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  return (
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


      <input type="radio" id="huey" name="drone" value="huey"
             checked>
      <label for="huey">Huey</label>


      <input type="radio" id="dewey" name="drone" value="dewey">
      <label for="dewey">Dewey</label>
  
      <input type="radio" id="louie" name="drone" value="louie">
      <label for="louie">Louie</label>
</fieldset>
  );
};

export default SelectsOrderFilter;
