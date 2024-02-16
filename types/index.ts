import { MouseEventHandler } from 'react';
import internal from 'stream';

// Typing propses for CustomButton
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  // MouseEventHandler react item for CallBack funcctions (as example waiting for click (button))
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

// Typing propes for Search in Car Catalogue
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

// Typing propes for CarCard (cars props)
export interface CarProps {
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
