export function isPositiveInteger(num) {
  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  return false;
}

export function isEmpty(str) {
  if (!str) {
    return true;
  }
  if (str === undefined) {
    return true;
  }
  if (str === null) {
    return true;
  }
  if (str === "") {
    return true;
  }
  if (str === "undefined") {
    return true;
  }
  return false;
}
