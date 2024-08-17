import { BiSearchAlt } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";

const Searchbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-neutral-100 border-2 border-neutral-100 p-4 rounded-lg px-2 py-2 hover:cursor-pointer hover:border-neutral-200 text-neutral-500 hover:text-neutral-600">
      <div className="flex gap-x-2 items-center">
        <span className="text-2xl"><BiSearchAlt /></span>
        <span className="font-poppins font-semibold text-lg">Search or CTRL + K</span>
      </div>
      <div className="flex gap-x-2 items-center">
        <span className="text-2xl bg-neutral-300 p-2 rounded-full flex items-center justify-center" >
          <TbSettings className="text-2xl" />
        </span>
        <span className="text-2xl bg-neutral-300 p-2 rounded-full flex items-center justify-center" >
          <TbSettings className="text-2xl" />

        </span>

      </div>
    </div>
  );
};

export default Searchbar;
