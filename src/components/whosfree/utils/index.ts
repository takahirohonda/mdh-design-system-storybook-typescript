export const joinClassNames = (...classes: Array<string | boolean>) => classes.filter((element) => typeof element === 'string').join(' ');
