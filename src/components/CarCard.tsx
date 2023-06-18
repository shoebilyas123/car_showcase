'use client';

import React from 'react';
import { ICarProps } from '~/types';
import { calculateCarRent } from '~/utils';

interface ICarCardProps {
  car: ICarProps;
}

const CarCard = ({ car }: ICarCardProps) => {
  const { city_mpg, make, model, transmission, drive, year } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
    </div>
  );
};

export default CarCard;
