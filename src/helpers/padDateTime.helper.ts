export function padDateTime(num: number) {
  const str = num.toString();
  return str.length === 1 ? `0${str}` : str;
}