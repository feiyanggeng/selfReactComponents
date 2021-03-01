export function count(a: number, b:number): number {
  return a + b;  
}

export function combineClassNames(...classNames: any[] ):string {
  if (classNames.length === 0) return '';
  return classNames.join(" ");
}

export default {
  count,
  combineClassNames
};