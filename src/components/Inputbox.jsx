export function InputBox({data,placeholder, onChange}) {
    return <>
        <div className="font-bold flex justify-start pl-5 text-sm mt-2">
            {data}
        </div>
        <div className="w-64 ml-5 mt-2">
            <input onChange={onChange} placeholder={placeholder} type="text" className="w-full border-2 border-inherit h-9 pl-2"></input>
        </div>
    </>
}