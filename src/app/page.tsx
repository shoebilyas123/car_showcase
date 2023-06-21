import Image from "next/image";
import { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar } from "~/components";
import ShowMore from "~/components/ShowMore";
import { fuels, yearsOfProduction } from "~/constants";
import { fetchCars } from "~/utils";

export default async function Home({ searchParams }: any) {
  const allCars = await fetchCars({
    limit: searchParams?.limit || 10,
    make: searchParams?.manufacturer || "",
    fuel: searchParams?.fuel || "",
    year: searchParams?.year || 2022,
    model: searchParams?.model || "",
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
          <section>
            <div className="home__cars-wrapper" id="cars-container">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              isNext={searchParams.limit > allCars.length}
              pageNumber={(searchParams.limit || 10) / 10}
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
