import {cva} from "class-variance-authority";

export const formContainerStyles = cva(
    'flex justify-center items-center p-8 rounded-[24px] bg-white-background w-[fit-content] h-[fit-content] shadow-3xl-white-background'
);

export const pageContainerAuthStyles = cva(
    "min-h-screen flex bg-[#D5E7FB] justify-center items-center"
);