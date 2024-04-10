import React from "react";
import SidebarButton from "./SidebarButton";
import { sidebar } from "@/configs/sidebar";

const Sidebar = () => {
  return (
    <div className="px-4 py-8 border-r-2 border-neutral-200 w-52">
      <div className="flex flex-col gap-y-4">
        {sidebar.map((option) => (
          <SidebarButton
            key={option.path}
            icon={option.icon}
            label={option.label}
            path={option.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
