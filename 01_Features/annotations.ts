let colors: string[] = ["red", "green", "blue"];

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// 'any' type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); => type 'any'
const coordinates: { x: number; y: number } = JSON.parse(json); // type '{ x: number; y: number }'
console.log(coordinates);

// multiple types
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach((number) => {
  if (number > 0) numberAboveZero = number;
});

console.log(numberAboveZero);

// -------------------Functions----------------------
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// never:
const throwError = (message: string): never => {
  throw new Error(message);
};

// -------------------destructuring----------------------

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeatcher = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeatcher(forecast);

// Object destructuring:
const person = {
  name: "Alex",
  age: 21,
};

const { age }: { age: number } = person;
