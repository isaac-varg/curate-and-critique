import { LuSearch, LuSettings } from "react-icons/lu"
import CollapseToggleButton from "./CollapseToggleButton"
import { useAppSelection } from "@/store/appSlice"
import { Fragment } from "react"
import { AnimatePresence, motion } from "motion/react"

const MenuButtons = () => {
  const { isSidebarCollapsed } = useAppSelection()

  return (
    <div className="flex items-center gap-4">

      <CollapseToggleButton />

      <AnimatePresence>
        {!isSidebarCollapsed && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4"
          >
            <button className="btn btn-circle btn-soft btn-primary">
              <LuSettings className="size-5" />
            </button>
            <button className="btn btn-circle btn-soft btn-primary">

              <LuSearch className="size-5" />
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>

  )
}

export default MenuButtons
