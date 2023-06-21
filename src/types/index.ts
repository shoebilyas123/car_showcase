import { MouseEventHandler } from "react";

export interface ICustomButton {
  containerStyles?: string;
  type?: "button" | "submit";
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
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

export interface ICarDetailsProps {
  car: ICarProps;
  isOpen: boolean;
  closeModal: () => void;
}

export interface IFetchCarsParams {
  make: string;
  model: string;
  limit: number;
  fuel: string;
  year: number;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ICustomFilter {
  options: OptionProps[];
  title: string;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
}

export interface ISearchBarParams {
  setModel: React.Dispatch<React.SetStateAction<string>>;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}
