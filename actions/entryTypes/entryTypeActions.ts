import PrismaAction from "@/utilities/classes/PrismaAction";
import { getByCollection } from "./getByCollection";

class EntryTypeAction extends PrismaAction {
  constructor() {
    super("entryType");
  }

  getCollection = async (collectionId: string) => {
    const resonse = await getByCollection(collectionId);
    return resonse;
  };
}


const entryTypeActions = new EntryTypeAction();

export default entryTypeActions