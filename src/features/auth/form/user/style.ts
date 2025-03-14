import { cva } from 'class-variance-authority';

export const inputFieldStyles = cva(
    'flex items-start flex-col',
);

export const forgotPasswordStyles = cva(
    'text-paragraph-lg font-normal tracking-normal text-blue-text mt-2'
);

export const buttonContainerStyles = cva(
    'flex flex-col items-center gap-[12px]'
);