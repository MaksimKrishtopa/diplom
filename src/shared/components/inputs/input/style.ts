import {cva} from "class-variance-authority";

const inputStyles = cva(
    'w-full border-input-border text-paragraph-lg text-input-text focus:border-input-border-active hover:border-input-border-active focus:outline-none bg-input-background cursor-pointer rounded-2xl border-2 flex justify-between py-3 px-4 leading-6 font-roboto font-normal',
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

export {
    inputStyles
}