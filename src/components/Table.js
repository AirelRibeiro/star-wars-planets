import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../style/Table.css';

const Table = () => {
  const {
    dataForFilter,
    filterByName } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {dataForFilter
          .filter(({ name }) => name.includes(filterByName)).map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name"><p>{ planet.name }</p></td>
              <td><p>{ planet.rotation_period }</p></td>
              <td><p>{ planet.orbital_period }</p></td>
              <td><p>{ planet.diameter}</p></td>
              <td><p>{ planet.climate }</p></td>
              <td><p>{ planet.gravity}</p></td>
              <td><p>{ planet.terrain }</p></td>
              <td><p>{ planet.surface_water }</p></td>
              <td><p>{ planet.population }</p></td>
              <td>
                { planet.films.map((film) => (
                  <p key={ film }>{film}</p>
                )) }
              </td>
              <td><p>{ planet.created }</p></td>
              <td><p>{ planet.edited}</p></td>
              <td><p>{ planet.url }</p></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
