import { SigninSignup } from "../components/Signup"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"
export const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <>
    <div className="flex justify-center bg-neutral-600 h-[100vh] relative">
        <div className="bg-state-300 flex flex-col h-[70vh] mt-14 w-[20vw] rounded-md bg-white text-center pt-8">
            <SigninSignup data={"Sign Up"}></SigninSignup>
            <Subheading data={"Enter Your information to create your account"}></Subheading>
            <InputBox onChange={e=>{
                setFirstName(e.target.value);
            }} data={"First Name"} placeholder={"john"}/>
            <InputBox onChange={e=>{
                setLastName(e.target.value);
            }} data={"Last Name"} placeholder={"dow"}/>
            <InputBox onChange={e=>{
                setEmail(e.target.value)
            }} data={"Email"} placeholder={"example@gmail.com"}/>
            <InputBox onChange={e=>{
                setPassword(e.target.value);
            }} data={"Password"}/>
            <Button onClick={async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                });
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard");
            }} data={"Create"}></Button>
            <BottomWarning data={"Already have an account?"} buttontext={"Signin"} to={"/signin"}></BottomWarning>
        </div>
        </div>
    </>
}