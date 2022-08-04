import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../style/SelectsNumberFilter.css';

const SelectsNumberFilter = () => {
  const {
    selectNumberFilter,
    setSelectNumberFilter,
    dataForFilter,
    setDataForFilter,
    selectFiltersAvailables,
    setSelectFiltersAvailables,
    data } = useContext(PlanetsContext);

  const [usedFilters, setUsedFilters] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSelectChange = ({ target }) => {
    const newSelectFilter = [{ ...selectNumberFilter[0], [target.name]: target.value }];
    setSelectNumberFilter(newSelectFilter);
  };

  const availablesFilters = (usedFilter) => {
    const newOptions = selectFiltersAvailables.filter((option) => option !== usedFilter);
    setSelectFiltersAvailables(newOptions);
  };

  const saveFilter = (filterType, comparsionType, number) => {
    const filter = {
      filterType,
      comparsionType,
      number,
      filter: `${filterType} ${comparsionType} ${number}`,
    };
    setUsedFilters([...usedFilters, filter]);
    setIsFiltered(true);
  };

  const filteredPlanets = (filterType, comparsionType, number) => {
    if (comparsionType === 'maior que') {
      const newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] > Number(number));
      setDataForFilter(newPlanetsData);
      availablesFilters(filterType);
      saveFilter(filterType, comparsionType, number);
    }
    if (comparsionType === 'menor que') {
      const newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] < Number(number));
      setDataForFilter(newPlanetsData);
      availablesFilters(filterType);
      saveFilter(filterType, comparsionType, number);
    }
    if (comparsionType === 'igual a') {
      const newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] === number);
      setDataForFilter(newPlanetsData);
      availablesFilters(filterType);
      saveFilter(filterType, comparsionType, number);
    }
  };

  const refreshFilters = (arrayForFilter, filterType, comparsionType, number) => {
    switch (comparsionType) {
    case 'maior que':
      return arrayForFilter
        .filter((planet) => planet[filterType] > Number(number));
    case 'menor que':
      return arrayForFilter
        .filter((planet) => planet[filterType] < Number(number));
    case 'igual a':
      return arrayForFilter
        .filter((planet) => planet[filterType] > number);
    default:
      break;
    }
  };

  const deletFilter = (usedFilter) => {
    const allFilters = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const newArrayOfFilters = usedFilters.filter(({ filter }) => filter !== usedFilter);
    setUsedFilters(newArrayOfFilters);
    let planetsData = [...data];
    newArrayOfFilters.forEach(({ filterType, comparsionType, number }) => {
      planetsData = refreshFilters(planetsData, filterType, comparsionType, number);
    });
    setDataForFilter(planetsData);
    const newOptions = allFilters
      .filter((filter) => !newArrayOfFilters
        .map(({ filterType }) => filterType).includes(filter));
    console.log(newOptions);
    setSelectFiltersAvailables(newOptions);
    if (newArrayOfFilters.length <= 0) {
      setIsFiltered(false);
    }
  };

  return (
    <fieldset className="filter-number-div">
      <legend>Filtros numéricos</legend>
      {isFiltered && usedFilters.map(({ filter: usedFilter }) => (
        <p key={ usedFilter }>
          {usedFilter}
          <button type="button" onClick={ () => deletFilter(usedFilter) }>X</button>
        </p>
      ))}
      <select
        name="column"
        value={ selectNumberFilter[0].column }
        onChange={ handleSelectChange }
      >
        {selectFiltersAvailables
          .map((option) => (<option key={ option } value={ option }>{ option }</option>))}

      </select>
      <select
        name="comparison"
        value={ selectNumberFilter[0].comparison }
        onChange={ handleSelectChange }
      >
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>
      <input
        type="number"
        name="value"
        value={ selectNumberFilter[0].value }
        onChange={ handleSelectChange }
      />
      <div />
      <button
        type="button"
        onClick={
          () => (
            filteredPlanets(selectNumberFilter[0].column,
              selectNumberFilter[0].comparison, selectNumberFilter[0].value))
        }

      >
        Filtrar
      </button>
      <button
        type="button"
        onClick={ () => {
          setDataForFilter([...data]);
          setIsFiltered(false);
          setUsedFilters([]);
        } }
      >
        Remover filtros
      </button>
    </fieldset>
  );
};

export default SelectsNumberFilter;
