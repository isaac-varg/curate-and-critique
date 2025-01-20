import { addCollection } from "./addCollection";
import { getCollections } from "./getCollections";
import { getOneCollection } from "./getOneCollection";
import { updateCollection } from "./updateCollection";

export const CollectionActions = {
    add: addCollection,
    getAll: getCollections,
    getOne: getOneCollection,
    update: updateCollection,
}
