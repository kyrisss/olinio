import { IconType } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegUser, FaSpinner } from "react-icons/fa";
import { TbPencil } from "react-icons/tb";

export enum IconTypes {
  EDIT_PENCIL = "editPencil",
  EYE = "eye",
  INVISIBLE_EYE = "invisibleEye",
  SPINNER = "spinner",
  USER = "user",
}

export const IconTypeMap: Record<IconTypes, IconType> = {
  [IconTypes.EYE]: AiOutlineEye,
  [IconTypes.INVISIBLE_EYE]: AiOutlineEyeInvisible,
  [IconTypes.USER]: FaRegUser,
  [IconTypes.SPINNER]: FaSpinner,
  [IconTypes.EDIT_PENCIL]: TbPencil,
};
