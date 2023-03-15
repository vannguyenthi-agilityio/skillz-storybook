/**
 *
 * @param {number} pxValue - the number of px for converting to rem
 * @returns "1rem" - with pxValue is 16px
 */
export const convertPxToRem = (pxValue: number) => {
  const baseSize = window
    .getComputedStyle(document.getElementsByTagName('html')[0])
    .getPropertyValue('font-size')
    .slice(0, 2);
  return `${pxValue / Number(baseSize)}rem`;
};

/**
 * Checks if a value is empty
 * @example
 *    isEmpty(null); // true
 *    isEmpty(undefined); // true
 *    isEmpty(''); // true
 *    isEmpty([]); // true
 *    isEmpty({}); // true
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 */

export const isEmpty = (value: any) => {
  return (
    value === null || // check for null
    value === undefined || // check for undefined
    value === '' || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
    (typeof value === 'object' && Object.keys(value).length == 0) // check for empty object
  );
};
