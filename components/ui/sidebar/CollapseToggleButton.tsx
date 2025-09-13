import { useAppActions, useAppSelection } from "@/store/appSlice"
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu"

const CollapseToggleButton = () => {
  const { isSidebarCollapsed } = useAppSelection()
  const { toggleSidebarCollapse } = useAppActions()
  return (
    <button
      onClick={toggleSidebarCollapse}
      className="btn btn-primary btn-soft btn-circle text-xl">
      {isSidebarCollapsed ? <LuPanelRightClose /> : <LuPanelLeftClose />}
    </button>
  )
}

export default CollapseToggleButton
