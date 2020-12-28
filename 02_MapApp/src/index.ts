import { Map } from "./Map";
import { User } from "./User";
import { Company } from "./Company";

window["initMap"] = function initMap() {
  let map = new Map(document.getElementById("map"));
  map.addMarker(new User());
  map.addMarker(new Company());
};
