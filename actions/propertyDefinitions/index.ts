import { createPropertyDefinition } from "./create";
import { getAllPropertyDefinitions } from "./getAll";
import { updatePropertyDefinition } from "./update";

export const propertyDefinitionActions = {
  getAll: getAllPropertyDefinitions,
  create: createPropertyDefinition,
  update: updatePropertyDefinition,
} 
