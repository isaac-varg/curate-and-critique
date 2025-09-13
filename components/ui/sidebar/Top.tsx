import { AnimatePresence, motion } from "motion/react"
import Brand from "./Brand"
import { useAppSelection } from "@/store/appSlice"

const Top = () => {
  const { isSidebarCollapsed } = useAppSelection()
  return (
    <div className="flex gap-2 justify-start items-center">
      <Brand />

      <AnimatePresence>
        {!isSidebarCollapsed && (
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="text-lg font-semibold text-accent/75"
          >
            Curate & Critique
          </motion.h1>
        )}
      </AnimatePresence>
    </div>

  )
}

export default Top
