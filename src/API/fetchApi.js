const fetchPlanetsInformation = async (setData, setDataForFilter) => {
  const negativeOne = -1;
  const planetsResponse = await fetch('https://swapi.dev/api/planets/');
  const planetsData = await planetsResponse.json();
  setData(planetsData.results);
  setDataForFilter(planetsData.results
    .sort((a, b) => (a.name > b.name ? 1 : negativeOne)));
};

export default fetchPlanetsInformation;
