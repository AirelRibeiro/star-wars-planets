import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../style/SelectsNumberFilter.css';

const SelectsNumberFilter = () => {
  const allFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const {
    selectNumberFilter,
    setSelectNumberFilter,
    dataForFilter,
    setDataForFilter,
    selectFiltersAvailables,
    setSelectFiltersAvailables,
    usedFilters,
    setUsedFilters,
    setIsFiltered,
    data } = useContext(PlanetsContext);

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
    let newPlanetsData = [];
    if (comparsionType === 'maior que') {
      newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] > Number(number));
    }
    if (comparsionType === 'menor que') {
      newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] < Number(number));
    }
    if (comparsionType === 'igual a') {
      newPlanetsData = dataForFilter
        .filter((planet) => planet[filterType] === number);
    }
    setDataForFilter(newPlanetsData);
    availablesFilters(filterType);
    saveFilter(filterType, comparsionType, number);
  };

  return (
    <div className="filter-number-div">
      <legend>NUMERIC FILTERS</legend>
      {usedFilters.length < allFilters.length && (
        <>
          <select
            name="column"
            value={ selectNumberFilter[0].column }
            onChange={ handleSelectChange }
          >
            {selectFiltersAvailables
              .map((option) => (
                <option key={ option } value={ option }>{option}</option>
              ))}

          </select>
          <select
            name="comparison"
            value={ selectNumberFilter[0].comparison }
            onChange={ handleSelectChange }
          >
            <option value="maior que">Greater than</option>
            <option value="menor que">Less than</option>
            <option value="igual a">Equal to</option>
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
            onClick={ () => (
              filteredPlanets(selectNumberFilter[0].column,
                selectNumberFilter[0].comparison, selectNumberFilter[0].value)) }
          >
            Filtrar
          </button>

        </>
      )}
      {usedFilters.length >= allFilters.length
        && <p>Não há mais filtros a serem aplicados</p>}
      <button
        type="button"
        onClick={ () => {
          setDataForFilter([...data]);
          setSelectFiltersAvailables(allFilters);
          setIsFiltered(false);
          setUsedFilters([]);
        } }
      >
        Remover filtros
      </button>
    </div>
  );
};

export default SelectsNumberFilter;
