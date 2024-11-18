"use client"

import { BiSearchAlt } from "react-icons/bi"

const SearchBar = () => {
    return (
        <div className="flex items-center justify-start gap-x-4 bg-base-300 py-2 px-4 rounded-xl w-64 ">
            <div className="text-2xl flex flex-row items-center opacity-60"><BiSearchAlt /></div>
            <span className="text-lg font-semibold uppercase flex items-center opacity-60"><h3>ctrl + k</h3></span>
        </div>
    )
}

export default SearchBar
