import PrismaAction from "@/utilities/classes/PrismaAction";
import { getAllWithImage } from "./getAllWithImage";

class CollectionActions extends PrismaAction {
    constructor() {
        super("collection");
    }

    getAllWithImage = async () => {
        const response = await getAllWithImage();
        return response;
      };
}

const collectionActions = new CollectionActions();

export default collectionActions;
