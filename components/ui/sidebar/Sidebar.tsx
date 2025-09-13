'use client'
import { useAppSelection } from "@/store/appSlice";
import { motion, Variants } from "motion/react"
import Brand from "./Brand";
import MenuButtons from "./MenuButtons";
import Top from "./Top";
import CollapseToggleButton from "./CollapseToggleButton";
const Sidebar = () => {

  const { isSidebarCollapsed } = useAppSelection();


  const sidebarVariants: Variants = {
    expanded: {
      width: "18rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    collapsed: {
      width: "5rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      animate={isSidebarCollapsed ? "collapsed" : "expanded"}
      className="p-6 bg-base-100 shadow-lg shadow-base-300 z-50 rounded-xl flex flex-col justify-between"
    >
      <div className="flex flex-col gap-y-6">
        <Top />
      </div>

      <div className="flex items-center justify-center">
        <MenuButtons />
      </div>

    </motion.div>
  )
}

export default Sidebar
