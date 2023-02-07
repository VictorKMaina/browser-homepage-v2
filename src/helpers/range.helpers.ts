export function range(end: number, start = 1, step = 1) {
  let range = [];

  if (end < start) step = -step;

  while (step > 0 ? end >= start : end <= start) {
    range.push(start);
    start += step;
  }

  return range;
}
