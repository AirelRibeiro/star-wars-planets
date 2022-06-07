import React from 'react';

const SelectsFilter = () => (
  <div>
    <select name="column">
      <option value="population" selected>population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
    <select name="comparison">
      <option value="menor que">menor que</option>
      <option value="maior que" selected>maior que</option>
      <option value="igual a">igual a</option>
    </select>
    <input type="number" name="value" />
  </div>);

export default SelectsFilter;
