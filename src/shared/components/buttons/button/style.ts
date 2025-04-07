import {cva} from "class-variance-authority";

const buttonStyles = cva(
    'transition-colors duration-200',
    {
        variants: {
            variant: {
                primary: 'w-full bg-primary text-white rounded-2xl font-roboto cursor-pointer py-3',
                secondary: 'w-full bg-secondary rounded-2xl border-inset text-primary py-3',
                selective: 'px-4 py-2 bg-selective text-white font-roboto rounded-2xl text-xs hover:bg-selective-hover hover:shadow-selective-hover active:bg-selective-active disabled:bg-selective-disable disabled:cursor-not-allowed transition-all',
            },
        },
        defaultVariants: {
            variant: 'primary'
        },
    }
);

export {buttonStyles}