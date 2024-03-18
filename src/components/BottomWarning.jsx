import { Link } from "react-router-dom"
export function BottomWarning ({data, buttontext, to}) {
    return <>
    <div className="flex justify-center">
        <div className="text-black text-sm font-semibold">
            {data}
        </div>
        <Link className="text-black text-sm font-semibold ml-1 underline" to={to}>
        {buttontext}
        </Link>
    </div>
    </>
}