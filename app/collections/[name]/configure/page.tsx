import collectionActions from "@/actions/collection/collection";
import { Collection } from "@/types/Collection";
import React from "react";
import TitleRow from "./_components/TitleRow";
import EntryTypeDialog from "./_components/EntryTypeDialog";
import entryTypeActions from "@/actions/entryTypes/entryTypeActions";
import { EntryType } from "@/types/EntryType";

type ConfigureCollectionPageProps = {
  searchParams: {
    id: string;
  };
};

const ConfigureCollectionPage = async ({
  searchParams,
}: ConfigureCollectionPageProps) => {

  const collection: Collection = await collectionActions.getById(
    searchParams.id
  );

  if (!collection.id) {
    return null;
  }

  const entryTypes = await entryTypeActions.getCollection(collection.id) as EntryType[];

  return (
    <div>
      <EntryTypeDialog entryTypes={entryTypes} />

      <TitleRow title={`${collection.name} Configuration`} />
    </div>
  );
};

export default ConfigureCollectionPage;
