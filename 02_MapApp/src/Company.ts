import faker from "faker";
import { Entity } from "./Entity";
import { Mappable } from "./Map";

export class Company extends Entity implements Mappable {
  catchPhrase: string;

  constructor() {
    super(faker.company.companyName());
    this.catchPhrase = faker.company.catchPhrase();
  }

  getContent = (): string => {
    return `<div><h1>${this.name}</h1>
    <h3>${this.catchPhrase}</h3></div>`;
  };
}
