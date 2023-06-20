import { ICarProps, IFetchCarsParams } from "~/types";

const axios = require("axios");

export async function fetchCars(filters: IFetchCarsParams) {
  try {
    const options = {
      method: "GET",
      url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      params: { ...filters },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.NEXT_RAPIDAPI_HOST,
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
