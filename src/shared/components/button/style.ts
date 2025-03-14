import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
    'transition-colors duration-200',
    {
        variants: {
            styleType: {
                primary: 'bg-primary w-[346px] h-12 rounded-2xl text-white-text font-roboto cursor-pointer py-2 px-4',
                secondary: 'bg-secondary w-[346px] h-12 rounded-2xl border-secondary-border text-blue-text py-2 px-4',
                selective: 'bg-selective text-white-text font-roboto w-52 h-[60px] rounded-lg hover:bg-selective-hover hover:shadow-selective-hover active:bg-selective-active disabled:bg-selective-disable disabled:cursor-not-allowed transition-all duration-200',
            },
        },
    }
);