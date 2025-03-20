export const regexp = {
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    password: /^[0-9a-zA-Z-_!?]+/,
};

export const createRegExp = (pattern: RegExp, flags?: string) => {
    return new RegExp(pattern, flags);
};