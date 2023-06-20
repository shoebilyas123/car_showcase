import { ICarProps, IFetchCarsParams } from "~/types";

import axios from "axios";

export async function fetchCars(filters: IFetchCarsParams) {
  try {
    const options = {
      method: "GET",
      url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      params: { ...filters },
      headers: {
        "X-RapidAPI-Key": "3f39b3432cmsh3b77398ba9da095p1885efjsnaa514d8023e5",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const generateCarImage = async (car: ICarProps, angle?: string) => {};
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  let newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
