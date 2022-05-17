import { useState } from "react"

type Props = { title: String }

export default function Accordion({ title }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return <div className="mb-4 border-2 rounded-lg">
        <button className="p-5 flex justify-between w-full" type="button" onClick={()=> setIsCollapsed(!isCollapsed)}>
                {title} <img src="/images/icons/fi_arrow-down.svg" alt="Star" />
            </button>
        <div className={`${isCollapsed ? `hidden` : `block border-t-2`} p-5`}>
            <p className="">overriding our default variables.</p>
        </div>
    </div>
}