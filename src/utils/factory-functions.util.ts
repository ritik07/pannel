export function pxToRem(pxValue: any) {
  if (isNaN(pxValue)) {
    return pxValue;
  }
  return pxValue / 10 + "rem";
}
