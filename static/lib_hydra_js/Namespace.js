import { getRoot } from './Utils.js';
import { createMapping, getMappingMaps } from './DependencyInjector.js';
let namespace = getRoot();

export function setNamespace(_namespace) {
  namespace = _namespace;
  createMapping(getMappingMaps(), 'ns_', namespace);
}

export function getNamespace() {
  return namespace;
}
