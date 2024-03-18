export async function getLocationInfos(cityName: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8f04e1b3301b2ca25146fee52f9efbb7`
  );

  if (!res.ok) {
    throw new Error("Cidade não encontrada");
  }

  return res.json();
}
