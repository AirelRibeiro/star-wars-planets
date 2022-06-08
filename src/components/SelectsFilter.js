import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const SelectsFilter = () => {
  const {
    selectNumberFilter,
    setSelectNumberFilter,
    dataForFilter,
    setDataForFilter,
    selectFiltersAvailables,
    setSelectFiltersAvailables } = useContext(PlanetsContext);

  const handleSelectChange = ({ target }) => {
    const newSelectFilter = [{ ...selectNumberFilter[0], [target.name]: target.value }];
    setSelectNumberFilter(newSelectFilter);
  };

  const availablesFilters = (usedFilter) => {
    const newOptions = selectFiltersAvailables.filter((option) => option !== usedFilter);
    setSelectFiltersAvailables(newOptions);
  };

  const filteredPlanets = (filterType, comparsionType, number) => {
    if (comparsionType === 'maior que') {
      const newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] > Number(number));
      setDataForFilter(newPlanetsData);
      availablesFilters(filterType);
    }
    if (comparsionType === 'menor que') {
      const newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] < Number(number));
      setDataForFilter(newPlanetsData);
      availablesFilters(filterType);
    }
    if (comparsionType === 'igual a') {
      const newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] === number);
      setDataForFilter(newPlanetsData);
      availablesFilters(filterType);
    }
  };

  // const selectedFilters = (filterType, comparsionType, number) => {
  //   switch (filterType) {
  //   case 'population':

  //     break;

  //   default:
  //     break;
  //   }
  // };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        value={ selectNumberFilter[0].column }
        onChange={ handleSelectChange }
      >
        {selectFiltersAvailables
          .map((option) => (<option key={ option } value={ option }>{ option }</option>))}

      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ selectNumberFilter[0].comparison }
        onChange={ handleSelectChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ selectNumberFilter[0].value }
        onChange={ handleSelectChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={
          () => (
            filteredPlanets(selectNumberFilter[0].column,
              selectNumberFilter[0].comparison, selectNumberFilter[0].value))
        }

      >
        Filtrar
      </button>
    </div>
  );
};

export default SelectsFilter;
