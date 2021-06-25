import { data, sections } from "config";

export function getPlanetNames() {
  return data.map((d) => d.name);
}

export function getPlanetDataByName(planetName) {
  return data.filter((d) => d.name === planetName)[0];
}

export function getSectionNames() {
  return sections.map((section) => section.name);
}

export function getSectionAliases() {
  return sections.map((section) => section.alias);
}
