const today = new Date();
today.getMonth();

class Color {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const red = new Color("red");

// --------------------- ARRAYS---------------------

// multiple types in arrays:

const importantDates = [new Date(), "12.01.2020"];
const importantDatesBoth: (Date | string)[] = [new Date(), "12.01.2020"];

// --------------------- TUPLES ---------------------

// object...
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// ... or tuple

// consisting of type alias:
type Drink = [string, boolean, number];

// and definition
const pepsi: Drink = ["brown", true, 40];
const spirte: Drink = ["clear", true, 30];
const tea: Drink = ["brown", false, 0];

// --------------------- INTERFACE ---------------------

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(2000, 1, 18),
  broken: true,
  summary(): string {
    return `Name: ${this.name} \nBroken: ${this.broken} \nDate: ${this.year}`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);

// --------------------- CLASS ---------------------

// yay modifiers

class Vehicle {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log(`${this.color} car go brumm brumm`);
  }

  private honk(): void {
    console.log("boop boop");
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }

  public drive(): void {
    console.log(`${this.color} car go vroom vroom`);
  }
}

const vehicle = new Car("red");
vehicle.drive();
//vehicle.honk();
