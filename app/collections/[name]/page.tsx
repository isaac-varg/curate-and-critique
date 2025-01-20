import { ServerComponentProps } from "~/types/ServerComponentProps"
import TitleBar from "./_components/TitleBar"
import { CollectionActions } from "~/actions/collection"


const CollectionPage = async ({ searchParams }: ServerComponentProps) => {

    const collection = await CollectionActions.getOne(searchParams.id);

    return (
        <div>
            <TitleBar  collection={collection}/>
        </div>
    )
}

export default CollectionPage
