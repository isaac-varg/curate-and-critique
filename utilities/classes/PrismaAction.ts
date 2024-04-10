import { create } from "@/actions/classes/create";
import { getAll } from "@/actions/classes/getAll";
import { getById } from "@/actions/classes/getById";

export default class PrismaAction {
    model: string;
    constructor(modelName: string) {
        this.model = modelName
    }

    getAll = async () => {
        const response = await getAll(this.model);
        return response;
    }

    getById = async (id: string) => {
        const response = await getById(this.model, id);
        return response;
    }

    create = async (data: any) => {
        const response = await create(this.model, data);
        return response;
    }
}