// Задание 1

export const sumEvenNumbers = (arr: number[]): number => {
  return arr.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
};

//Задание 2
export interface StringToBooleanFunction {
  (str: string): boolean;
}

export const isEmptyString: StringToBooleanFunction = (str) => str.length === 0;

//Задание 3

export type CompareStrings = (a: string, b: string) => boolean;

export const areStringsEqual: CompareStrings = (a, b) => a === b;

//Задание 4

export function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

//Задание 5

export function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}
