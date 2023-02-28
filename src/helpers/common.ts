/**
 *
 * @param baseSize 16px
 * @returns "1rem"
 */
const convertPxToRem = (pxValue: number ) => {
  let baseSize = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size').slice(0, 2);
  return `${pxValue/Number(baseSize)}rem`;
};

export default convertPxToRem;
