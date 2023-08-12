import React, { FC } from "react";

import { IconTypeMap, IconTypes } from "./IconsLib";

export interface IconProps {
  className?: string;
  disabled?: boolean;
  icon: IconTypes;
  id?: string;
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  size?: number;
  title?: string;
}

export enum IconSize {
  SMALL = 24,
  MEDIUM = 28,
  LARGE = 32,
  EXTRA_LARGE = 48,
}

export const Icon: FC<IconProps> = ({ icon, className, size = IconSize.SMALL, title, disabled, onClick, id, ...rest }) => {
  const IconComponent = IconTypeMap[icon];

  if (IconComponent) {
    return <IconComponent {...rest} id={id} className={className} size={size} title={title} onClick={!disabled ? onClick : undefined} />;
  } else {
    return <span>NoIcon</span>;
  }
};
