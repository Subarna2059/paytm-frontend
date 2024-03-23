import { SigninSignup } from "../components/Signup"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return<>
         <div className="flex justify-center bg-neutral-600 h-[100vh] relative ">
        <div className="bg-state-300 flex flex-col h-[50vh] mt-14 w-[20vw] rounded-md bg-white text-center absolute pt-8 mt-44">
            <SigninSignup data={"Sign In"}></SigninSignup>
            <Subheading data={"Enter Your credentials to access your account"}></Subheading>
            <InputBox  onChange={e=>{
                setEmail(e.target.value);
            }} data={"Email"} placeholder={"example@gmail.com"}/>
            <InputBox onChange={e=>{
                setPassword(e.target.value);
            }} data={"Password"}/>
            <Button onClick={
                async(e)=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        email:email,
                        password:password
                    })
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
                }
            } data={"Sign In"}></Button>
            <BottomWarning data={"Dont' have an account?"} buttontext={"SignUp"} to={"/signUp"}></BottomWarning>
        </div>
        </div>
    </>
}