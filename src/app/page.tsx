"use client";

import { getData } from "@/api/getData";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [cityInfos, setCityInfos] = useState("");

  async function fetchData(local: string) {
    const data = await getData(local);
    setCityInfos(JSON.stringify(data));
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button onClick={() => fetchData(city)}>Buscar</button>

      <h1>{cityInfos}</h1>
    </>
  );
}
