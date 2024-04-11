import React from "react";
import TitleRow from "./_components/TitleRow";

type CollectionDashboardProps = {
  params: {
    name: string;
  };
  searchParams: {
    collection_id: string;
  };
};

const CollectionDashboardPage = ({
  params,
  searchParams,
}: CollectionDashboardProps) => {

  return (
    <div>
      <TitleRow
        collectionId={searchParams.collection_id}
        title={params.name.charAt(0).toUpperCase() + params.name.slice(1)}
      />
    </div>
  );
};

export default CollectionDashboardPage;
