import { Appbar } from "../components/Dashboard"
import { Amount } from "../components/Amount"
import { UserComponent } from "../components/UserComponent"
export const Dashboard = ()=>{
    return <>
    <div className="flex flex-col">
        <div className="flex justify-center">
        <Appbar> </Appbar>
        </div>
        <div className=" "> 
            <Amount></Amount>
        </div>
    </div>
    <div className="">
        <UserComponent></UserComponent>
    </div>
    </>
}