import { MouseEventHandler } from "react";

// Typing propses for CustomButton

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  // MouseEventHandler react item for CallBack funcctions (as example waiting for click (button))
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
