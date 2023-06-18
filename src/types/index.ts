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
