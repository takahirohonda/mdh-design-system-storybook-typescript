export const capitalise = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

export const convertObjectToString = (obj: unknown) => (
  JSON.stringify(obj, null, 1)
    .replace(/"([^(")]+)":/g, '$1:')
    .replace(/"/g, "'")
)

export const joinClassNames = (...classes: Array<string | boolean>) =>
  classes.filter((element) => typeof element === 'string').join(' ')
