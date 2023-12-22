import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function StudioNavbar(props: any) {
    return (
        <div>
            <div className="bg-slate-200">
                <Link href="/" className="text-black flex items-center gap-2 px-4 py-3">
                    <ArrowUturnLeftIcon className="w-6 h-6 text-black"/>
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}