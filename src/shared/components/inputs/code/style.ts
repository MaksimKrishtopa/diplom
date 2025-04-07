import {cva} from "class-variance-authority";

const codeInputWrapStyles = {
    mainWrap: 'flex-column gap-y-3',
    inputsWrap: 'flex gap-2',
};

const codeInputStyles = cva(
    'w-12 h-12 text-center border-2 rounded-xl bg-input-background border-input-border focus:border-input-border-active focus:outline-none hover:border-input-border-active',
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
    codeInputStyles,
    codeInputWrapStyles
}