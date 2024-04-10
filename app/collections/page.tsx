import collectionActions from "@/actions/collection/collection";
import TitleRow from "./_components/TitleRow";
import CollectionCard from "./_components/CollectionCard";
import { Collection } from "@/types/Collection";

const CollectionsPage = async () => {
  const collections: Collection[] =
    (await collectionActions.getAllWithImage()) || [];

  return (
    <div className="flex flex-col gap-y-8">
      <TitleRow />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
