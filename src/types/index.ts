import { MouseEventHandler } from 'react';

export interface ICustomButton {
  containerStyles?: string;
  type?: 'button' | 'submit';
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
