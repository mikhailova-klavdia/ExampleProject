export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export enum CaseType {
  UPPER = 'upper',
  LOWER = 'lower',
}

export function format(str: string, type: CaseType): string {
  switch (type) {
    case CaseType.UPPER:
      return str.toUpperCase();
    case CaseType.LOWER:
      return str.toLowerCase();
  }
}
