import faker from "faker";
import { Entity } from "./Entity";
import { Mappable } from "./Map";

export class User extends Entity implements Mappable {
  constructor() {
    super(faker.name.firstName() + " " + faker.name.lastName());
  }

  getContent = (): string => {
    return `<div><h1>${this.name}</h1></div>`;
  };
}
