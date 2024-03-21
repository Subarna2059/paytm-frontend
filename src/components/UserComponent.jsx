import { useState } from "react"
import { Button } from "../components/Button"
export const UserComponent = ({ }) => {
    const [users, setUsers] = useState([{
        firstName: "Subarna",
        lastName: "Thapa",
        _id: 1,
    }])

    return <>
        <div className="flex flex-col justify-center ml-[80px] mt-4 ">
            <div className="font-bold">
                Users
            </div>
            <div>
                <input type="text" placeholder="Search here..." className="w-[90VW] shadow border-none pl-2 h-[40px]" />
            </div>
        </div>
        <div>
            {users.map(user => <User users={user}></User>)}
        </div>
    </>
}

function User({ users }) {
    return <>
        <div className="flex justify-center mt-3">
            <div className="flex w-[90VW] items-center justify-between">
                <div className="flex items-center">
                    <div className="h-12 w-12 bg-slate-200 rounded-full">
                        <div className="h-full flex justify-center items-center font-semibold text-lg">
                            {users.firstName[0]}
                        </div>
                    </div>
                    <div className="font-semibold ml-2">
                        {users.firstName} {users.lastName}
                    </div>
                </div>
                <div >
                    <Button data="send money"></Button>
                </div>
            </div>
        </div>
    </>
}
