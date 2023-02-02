export function classNames(...classes: (string | boolean)[]) {
  return classes
    .filter((className) => {
      if (className) return className;
    })
    .join(" ");
}