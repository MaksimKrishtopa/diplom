import { cva } from 'class-variance-authority';

export const inputPasswordStyles = cva(
    'border-input-border text-paragraph-lg text-[#040405] focus:border-input-border-active hover:border-input-border-active focus:outline-none bg-input-background cursor-pointer rounded-[16px] border-2 flex justify-between py-[12px] px-[16px] leading-[24px]font-roboto font-normal',
    {
        variants: {
            error: {
                true: 'border-input-border-error',
                false: 'border-input-border',
            },
        },
        defaultVariants: {
            error: false,
        },
    }
);