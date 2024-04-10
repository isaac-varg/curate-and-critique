"use client";

import { usePathname, useRouter } from "next/navigation";

type SidebarButtonProps = {
  icon: JSX.Element;
  label: string;
  path: string;
};

const classes = {
  active:
    "flex flex-row gap-x-2 items-center px-4 py-4 bg-neutral-100 w-full rounded-3xl hover:cursor-pointer",
  inactive:
    "flex flex-row gap-x-2 items-center px-4 py-4 w-full rounded-3xl hover:cursor-pointer",
};

const SidebarButton = ({ icon, label, path }: SidebarButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const isActive = '/' +pathParts[1] === `${path}` ? "active" : "inactive";

  const handleClick = () => {
    if (path === "") {
      router.push("/");
      return;
    }

    router.push(path);
  };

  return (
    <button className={`${classes[isActive]}`} onClick={handleClick}>
      <div className="text-2xl">{icon}</div>
      <div className="text-ishtar-800 text-lg font-Poppins font-medium ">{label}</div>
    </button>
  );
};

export default SidebarButton;
