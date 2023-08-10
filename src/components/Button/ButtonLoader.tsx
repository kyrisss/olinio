import React, { FC } from "react";
import cn from "classnames";

import { Icon, IconSize } from "@components/Icon/Icon";
import { IconTypes } from "@components/Icon/IconsLib";

interface LoaderProps {
  className?: string;
  size?: number;
}

export const ButtonLoader: FC<LoaderProps> = ({ size = IconSize.MEDIUM, className = "" }) => <Icon icon={IconTypes.SPINNER} size={size} className={cn("spinner", className)} />;
