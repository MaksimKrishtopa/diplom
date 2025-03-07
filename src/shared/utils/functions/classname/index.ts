export const makeClassname = (...classes: (string | undefined)[]): string => {
    return classes.filter(Boolean).join(' ');
};