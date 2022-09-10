// value가 falsy이면 false, truthy이면 true return
export const isTF = value => {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === 'object' && !Object.keys(value).length)
  ) {
    return false;
  } else {
    return true;
  }
};
