import {cva} from "class-variance-authority";

const logoContainerStyles = cva(
    'flex flex-col gap-40 items-start'
);

const paragraphStyles = cva(
    "justify-center font-bold text-title tracking-normal"
);

export {logoContainerStyles,paragraphStyles}