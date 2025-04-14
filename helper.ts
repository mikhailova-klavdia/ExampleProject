// helpers.ts

// Basic arithmetic functions
export function add(a: number, b: number): number {
    return a + b;
  }
  
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero error");
    }
    return a / b;
  }
  
  // String manipulation functions
  export function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }
  
  export function uppercase(str: string): string {
    return str.toUpperCase();
  }
  
  export function lowercase(str: string): string {
    return str.toLowerCase();
  }
  
  // Factorial function (recursive or iterative)
  export function factorial(n: number): number {
    if (n < 0) {
      throw new Error("Negative numbers are not allowed");
    }
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  
  