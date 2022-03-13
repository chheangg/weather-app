async function getCity(name) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=eff84045859e77f8259e956d234a4be2`,
    { mode: 'cors' },
  );
  const data = await response.json();
  console.log(data);
  return data;
}

async function getForecast(name) {
  const cityData = await getCity(name);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&appid=eff84045859e77f8259e956d234a4be2`,
    { mode: 'cors' },
  );
  const data = await response.json();
  return data;
}

function checkName(name) {
  let newName = name.toLowerCase().trim();
  newName = newName.replace(' ', '%20');
  console.log(newName);
  return newName;
}
export default { getCity, getForecast, checkName };
