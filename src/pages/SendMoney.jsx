import { useState } from "react"
import { SigninSignup } from "../components/Signup"
import { Button } from "../components/Button"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
export const SendMoney = () => {
    const [amount, setAmount] = useState();
    const[searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name")
    return <>
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col w-[35vw] shadow justify-between items-center">
                <div className="mt-7">
                    <SigninSignup data={"Send"} />
                </div>
                <div className="flex flex-col w-[25VW] ">
                <div className="flex h-[15VH] mr-[25VW] mt-20 ml-4">
                    <div className="bg-green-500 h-12 w-16 mb-40 rounded-full flex justify-center items-center font-semibold text-white text-2xl">
                        {name[0]}
                    </div>
                    <div className="ml-2 font-bold text-2xl">
                        {name}
                    </div>
                </div>
                <div className="ml-4 pb-16 font-semibold">
                    <div>
                        Amount in Rs
                    </div>
                    <div className="mb-3">
                        <input onChange={e=>{
                            setAmount(e.target.value);
                        }} type="text" placeholder="Enter amount" className="shadow-lg h-8 w-full border " />
                    </div>
                    <div >
                    <button onClick={e=>{
                        axios.post("http://localhost:3000/api/v1/amount/send",{
                            to: id,
                            amount: amount,
                        },{
                            headers:{
                                Authorization:"Bearer " + localStorage.getItem("token"),
                            }
                        })
                    }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </>
}