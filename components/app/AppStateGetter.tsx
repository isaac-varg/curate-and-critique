import { getConfigs } from "~/actions/user/getConfigs"
import AppStateSetter from "./AppStateSetter"
import { getCollections } from "~/actions/collection/getCollections"

const AppStateGetter = async () => {

    const configs = await getConfigs()

    return (
        <>
            <AppStateSetter configs={configs}  />
        </>
    )
}

export default AppStateGetter
