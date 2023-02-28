/**
 *
 * @param {number} pxValue - the number of px for converting to rem
 * @returns "1rem" - with pxValue is 16px
 */
const convertPxToRem = (pxValue: number ) => {
  let baseSize = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size').slice(0, 2);
  return `${pxValue/Number(baseSize)}rem`;
};

export default convertPxToRem;
