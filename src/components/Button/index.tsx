import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

import { Icon } from "@components/Icon/Icon";
import { IconTypes } from "@components/Icon/IconsLib";

import { ButtonLoader } from "./ButtonLoader";

export enum ButtonSizes {
  LARGE,
  MEDIUM,
  SMALL,
}

export const ButtonSizeClasses: { [key in ButtonSizes]: string } = {
  [ButtonSizes.LARGE]: "btn-large",
  [ButtonSizes.MEDIUM]: "btn-medium",
  [ButtonSizes.SMALL]: "btn-small",
};

export enum Variants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TETRIARY = "tetriary",
}

export enum ButtonTypes {
  BUTTON = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  disabled?: boolean;
  icon?: IconTypes;
  isLoading?: boolean;
  onClick?: () => void;
  size?: ButtonSizes;
  text?: string;
  type?: ButtonTypes;
  variant?: Variants;
};

export const Button: FC<ButtonProps> = ({ text, type = ButtonTypes.BUTTON, className, disabled, icon, isLoading, onClick, variant, size = ButtonSizes.MEDIUM, ...rest }) => (
  <button {...rest} className={cn("btn", variant, disabled && "disabled", ButtonSizeClasses[size], className)} disabled={disabled} onClick={onClick} type={type}>
    {isLoading ? (
      <ButtonLoader />
    ) : (
      <>
        {icon && <Icon disabled={disabled} icon={icon} size={size} className="btn__icon" />}
        {text}
      </>
    )}
  </button>
);
