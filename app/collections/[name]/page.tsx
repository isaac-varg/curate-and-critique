import React from "react";
import TitleRow from "./_components/TitleRow";
import entryTypeActions from "@/actions/entryTypes/entryTypeActions";
import EntryActions from "./_components/EntryActions";

type CollectionDashboardProps = {
  params: {
    name: string;
  };
  searchParams: {
    collection_id: string;
  };
};

const CollectionDashboardPage = async ({
  params,
  searchParams,
}: CollectionDashboardProps) => {

  const entryTypes = await entryTypeActions.getByCollection(searchParams.collection_id);

  return (
    <div>
      <TitleRow
        collectionId={searchParams.collection_id}
        title={params.name.charAt(0).toUpperCase() + params.name.slice(1)}
      />

       <EntryActions entryTypes={entryTypes as any} />
    </div>
  );
};

export default CollectionDashboardPage;
