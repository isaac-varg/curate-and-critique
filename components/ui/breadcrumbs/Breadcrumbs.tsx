"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Breadcrumbs = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const segments = pathname.split("/");

    const handleClick = (clickedIndex: number) => {
        if (clickedIndex === 0) {
            router.push('/')
            return;
        }

        const targetBasePathSegments: string[] = []

        segments.forEach((segment, index) => {
            if (index > clickedIndex) {
                return;
            }

            targetBasePathSegments.push(segment)
        })

        const targetBasePath = targetBasePathSegments.join("/");

        // can work up eventuall to include searchparams
        const targetSearchParams = ''

        const path = `${targetBasePath}`

        router.push(path)
    }



    return (
        <div className="breadcrumbs text-sm">
            <ul className="uppercase">
                <li><a onClick={() => handleClick(0)}>Home</a></li>

                {segments.map((s, index) => {
                    if (index === 0) { return null }
                    return (
                        <li key={s}><a onClick={() => handleClick(index)}>{s}</a></li>
                    )
                })}

            </ul>
        </div>)
}

export default Breadcrumbs
