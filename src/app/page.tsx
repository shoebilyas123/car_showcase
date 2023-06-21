"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar } from "~/components";
import ShowMore from "~/components/ShowMore";
import { fuels, yearsOfProduction } from "~/constants";
import { fetchCars } from "~/utils";

const Home = async () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filters states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try {
      const result = await fetchCars({
        make: manufacturer || "",
        model: model || "",
        limit: limit || 10,
        fuel: fuel || "",
        year: year || 2022,
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, manufacturer, model, limit]);

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar {...{ setModel, setManufacturer }} />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}

            {loading && (
              <div className="w-full mt-14 flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
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
};
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
