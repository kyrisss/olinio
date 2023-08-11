import { ElementType } from "react";
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

export const IconTypeMap: { [key in IconTypes]: ElementType } = {
  [IconTypes.EYE]: AiOutlineEye,
  [IconTypes.INVISIBLE_EYE]: AiOutlineEyeInvisible,
  [IconTypes.USER]: FaRegUser,
  [IconTypes.SPINNER]: FaSpinner,
  [IconTypes.EDIT_PENCIL]: TbPencil,
};
