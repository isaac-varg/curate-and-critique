// Takes form data structured as { [entryPropertyId]: value } and creates entry data for each entry property.

import entryDataActions from "@/actions/entries/entryDataActions";

export const createEntryDataFromForm = (entryId: string, formData: any) => {

  for (const key in formData) {
    const value = formData[key];

    const payload = {
      entryId,
      entryPropertyId: key,
      value,
    };

    entryDataActions.create(payload);
  }
};
