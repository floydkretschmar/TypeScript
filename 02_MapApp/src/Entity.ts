import faker from "faker";

export class Entity {
  location: {
    lat: number;
    lng: number;
  };
  name: string;

  constructor(name: string) {
    this.name = name;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
