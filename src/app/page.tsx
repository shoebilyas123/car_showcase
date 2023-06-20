import Image from "next/image";
import { useEffect } from "react";
import { CarCard, CustomFilter, Hero, SearchBar } from "~/components";
import { fuels, yearsOfProduction } from "~/constants";
import { fetchCars } from "~/utils";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || "",
    model: searchParams?.model || "carrera",
    limit: searchParams?.limit || 10,
    fuel: searchParams?.fuel || "",
    year: searchParams?.year || 2022,
  });
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
          <section className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
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
