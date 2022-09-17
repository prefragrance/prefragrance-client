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

// get, set, delete localStorage
export function setLocalStorage(name, value) {
  window.localStorage.setItem(name, value);
}

export function getLocalStorage(name, value) {
  return window.localStorage.getItem(name, value);
}

export function deleteLocalStorage(name) {
  window.localStorage.removeItem(name);
}
