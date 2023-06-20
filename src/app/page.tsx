"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar } from "~/components";
import ShowMore from "~/components/ShowMore";
import { fuels, yearsOfProduction } from "~/constants";
import { fetchCars } from "~/utils";

export default async function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // Pagination States
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      setLoading(true);
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "carrera",
        limit: limit || 10,
        fuel: fuel || "",
        year: year || 2022,
      });
      setAllCars(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              isNext={limit > allCars.length}
              pageNumber={(limit || 10) / 10}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl text-black font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
