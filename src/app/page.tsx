"use client";

import { getLocationInfos } from "@/api/getLocationInfos";
import { useEffect, useState } from "react";

import { Search } from "lucide-react";

export default function Home() {
  const [city, setCity] = useState("");
  const [cityInfos, setCityInfos] = useState<any>("");
  const [temperature, setTemperature] = useState();

  // Temperature - cityInfos.main.temp
  // Name - cityInfos.name
  // Chovendo - weather.main

  async function fetchCityData(local: string) {
    const data = await getLocationInfos(local);
    setCityInfos(data);
  }

  function convertFahrenheitToCelcius(temperature: number) {
    const temperatureInCelcius = temperature - 273.15;
    return temperatureInCelcius.toFixed(0);
  }

  return (
    <div className="w-screen h-screen bg-neutral-400 flex flex-col justify-center items-center lg:bg-pokeball-bg bg-cover bg-no-repeat text-zinc-700">
      <main className="w-4/5 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="focus:outline-none rounded-lg shadow-md min-w-64 w-2/5 px-3 h-12 bg-search-icon"
            placeholder="Buscar cidade..."
          />
          <button
            onClick={() => fetchCityData(city)}
            className="flex items-center justify-center"
          >
            <Search className="bg-white h-12 shadow-md rounded-r-md m-[-20px] w-12 p-2 text-zinc-400 border-l-2 border-l-zinc-300 hover:bg-zinc-300 duration-200" />
          </button>
        </div>

        {cityInfos && (
          <div className=" flex flex-col justify-center items-center gap-12 mt-12 ">
            <span>
              Cidade:{" "}
              <span className="text-indigo-800">
                {cityInfos.name
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}{" "}
                - {cityInfos.sys.country}
                {/* Formatação da string retirando os acentos para fonte não bugar */}
              </span>
            </span>
            <div className="flex flex-col gap-12 md:flex-row md:gap-80">
              <span>
                Pokemon: <span className="text-yellow-400">PIKACHU</span>
              </span>
              <span>
                Clima:
                <span className="text-red-600">
                  {cityInfos.weather[0].main === "Rain"
                    ? " Chuvoso"
                    : cityInfos.weather[0].main === "Clear"
                    ? " Ceu Limpo"
                    : cityInfos.weather[0].main === "Snow"
                    ? " Nevando"
                    : cityInfos.weather[0].main === "Clouds"
                    ? " Nublado"
                    : ""}
                </span>
              </span>
            </div>
            <span>
              Temperatura:{" "}
              <span className="text-sky-300">
                {convertFahrenheitToCelcius(cityInfos.main.temp)}°C
              </span>
            </span>
          </div>
        )}

        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
          className="z-10 h-96 z-96"
        />
        <div className="h-[50px] w-[380px] sm:h-[60px]  sm:w-[420px] bg-zinc-200 rounded-[100%] relative bottom-32 shadow-md "></div>

        <button className="h-12 sm:h-20 min-w-96 bg-yellow-400 border-4 border-sky-300 rounded-xl hover:bg-yellow-300 active:bg-yellow-300 duration-150">
          Gerar outro Pokemon
        </button>
      </main>
    </div>
  );
}
