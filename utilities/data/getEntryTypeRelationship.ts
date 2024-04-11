import { EntryType } from "@/types/EntryType";

const getEntryTypeRelationships = (data: EntryType[]): { parent: EntryType; child: EntryType }[] => {
  // Check if data is empty
  if (data.length === 0) {
    return []; // Return empty array if no data
  }

  const map: Record<string, EntryType> = {};

  for (const item of data) {
    if (item.id !== undefined) {
      map[item.id] = item;
    }
  }

  const relationships: { parent: EntryType; child: EntryType }[] = [];
  for (const item of data) {
    if (item.aggregateId) {
      const parentId = item.aggregateId;
      const parent = map[parentId];
      if (parent) {
        relationships.push({ parent, child: item });
      } else {
        console.error(`Error: Item with id "${item.id}" has a non-existent aggregateId of "${parentId}".`);
      }
    }
  }
  return relationships;
}


// interface Item {
//   id: string;
//   name: string;
//   pluralName: string;
//   aggregateId: string | null;
//   collectionId: string;
//}

// function getEntryTypeRelationships(data: Item[]): { parent: Item; child: Item }[] {
//   const map: Record<string, Item> = {};

//   for (const item of data) {
//     map[item.id] = item;
//   }

//   const relationships: { parent: Item; child: Item }[] = [];
//   for (const item of data) {
//     if (item.aggregateId) {
//       const parentId = item.aggregateId;
//       const parent = map[parentId];
//       if (parent) {
//         relationships.push({ parent, child: item });
//       } else {
//         // Handle potential missing parent (optional)
//         console.error(`Error: Item with id "${item.id}" has a non-existent aggregateId of "${parentId}".`);
//       }
//     }
//   }
//   return relationships;
// }

export default getEntryTypeRelationships;