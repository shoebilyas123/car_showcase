import { MouseEventHandler } from 'react';

export interface ICustomButton {
  containerStyles?: string;
  type?: 'button' | 'submit';
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
