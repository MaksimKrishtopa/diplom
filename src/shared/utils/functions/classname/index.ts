import {twMerge} from "tailwind-merge";
import clsx, {ClassValue} from "clsx";

export const makeClassname = (...classnames: ClassValue[]): string => twMerge(clsx(classnames))
