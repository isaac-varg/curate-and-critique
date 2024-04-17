import collectionActions from "@/actions/collection/collection";
import { Collection } from "@/types/Collection";
import React from "react";
import TitleRow from "./_components/TitleRow";
import EntryTypeDialog from "./_components/EntryTypeDialog";
import entryTypeActions from "@/actions/entryTypes/entryTypeActions";
import { EntryType } from "@/types/EntryType";
import getEntryTypeRelationships from "@/utilities/data/getEntryTypeRelationship";
import { TbArrowNarrowRight } from "react-icons/tb";
import RelationshipsPanel from "./_components/RelationshipsPanel";
import EntryTypePanel from "./_components/EntryTypePanel";
import EntryPropertyForm from "./_components/EntryPropertyForm";

type ConfigureCollectionPageProps = {
  searchParams: {
    collection_id: string;
  };
};

const ConfigureCollectionPage = async ({
  searchParams,
}: ConfigureCollectionPageProps) => {
  const collection: Collection = await collectionActions.getById(
    searchParams.collection_id
  );

  console.log(collection);
  if (!collection.id) {
    return null;
  }

  const entryTypes = await entryTypeActions.getByCollection(
    collection.id
  ) as EntryType[];


  const relationships = getEntryTypeRelationships(entryTypes as any);

  return (
    <div className="flex flex-col gap-y-6">
      <EntryTypeDialog entryTypes={entryTypes} />

      <TitleRow title={`${collection.name} Configuration`} />

      <div className="grid grid-cols-2 gap-4">
        {entryTypes.map((entryType) => (
          <EntryTypePanel key={entryType.id} entryType={entryType} />
        ))}
      </div>
    </div>
  );
};

export default ConfigureCollectionPage;
