export function Button ({data,onClick}) {
    return <>
        <div className="text-white	mt-3 mr-2">
            <button onClick={onClick} className="bg-gray-950 rounded-lg	h-10 w-64"> {data} </button>
        </div>
    </>
}