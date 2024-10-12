"use client"

import { BiSearchAlt } from "react-icons/bi"

const SearchBar = () => {
    return (
        <div className="flex items-center justify-start gap-x-4 bg-base-300 py-4 px-4 w-full rounded-xl ">
            <div className="text-2xl flex flex-row items-center"><BiSearchAlt /></div>
            <span className="text-xl font-semibold uppercase flex items-center"><h3>ctrl + k</h3></span>
        </div>
    )
}

export default SearchBar
