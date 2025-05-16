import { add, subtract, multiply, divide, reverseString, uppercase, lowercase, factorial } from "./calculations/helper";
import { Person } from "./calculations/myClass";

function main() {
  console.log("Testing helper functions:");
  console.log("add(2, 3) =", add(2, 3));
  console.log("subtract(5, 2) =", subtract(5, 2));
  console.log("multiply(3, 4) =", multiply(3, 4));
  console.log("divide(10, 2) =", divide(10, 2));
  console.log("reverseString('hello') =", reverseString("hello"));
  console.log("uppercase('world') =", uppercase("world"));
  console.log("lowercase('HELLO WORLD') =", lowercase("HELLO WORLD"));
  console.log("factorial(5) =", factorial(5));

  console.log("\nTesting the Person class:");
  const person = new Person("Alice", 30);
  console.log(person.greet());
}

main();
