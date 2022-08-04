import React, { useContext } from 'react';
import '../style/AppliedFilters.css';
import PlanetsContext from '../context/PlanetsContext';

const AppliedFilters = () => {
  const {
    setDataForFilter,
    setSelectFiltersAvailables,
    usedFilters,
    setUsedFilters,
    isFiltered,
    setIsFiltered,
    data } = useContext(PlanetsContext);

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
    <div>
      {isFiltered && usedFilters.map(({ filter: usedFilter }) => (
        <p key={ usedFilter }>
          {usedFilter}
          <button type="button" onClick={ () => deletFilter(usedFilter) }>X</button>
        </p>
      ))}
    </div>
  );
};

export default AppliedFilters;
