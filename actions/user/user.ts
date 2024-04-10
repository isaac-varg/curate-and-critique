import PrismaAction from "@/utilities/classes/PrismaAction";
import { getOneByEmail } from "./getOneByEmail";

class UserActions extends PrismaAction {
    constructor() {
        super("user");
    }

    getOneByEmail = async () => {
        const response = await getOneByEmail();
        return response;
      };
}

const userActions = new UserActions();

export default userActions;
