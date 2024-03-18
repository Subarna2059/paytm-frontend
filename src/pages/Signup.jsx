import { SigninSignup } from "../components/Signup"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
export const Signup = () => {
    return <>
    <div className="flex justify-center bg-neutral-600 h-[100vh] relative">
        <div className="bg-state-300 flex flex-col h-[70vh] mt-14 w-[20vw] rounded-md bg-white text-center absolute pt-8">
            <SigninSignup data={"Sign In"}></SigninSignup>
            <Subheading data={"Enter Your information to create your account"}></Subheading>
            <InputBox data={"First Name"} placeholder={"john"}/>
            <InputBox data={"Last Name"} placeholder={"dow"}/>
            <InputBox data={"Email"} placeholder={"example@gmail.com"}/>
            <InputBox data={"Password"}/>
            <Button data={"Create"}></Button>
            <BottomWarning data={"Already have an account?"} buttontext={"Signin"} to={"/signin"}></BottomWarning>
        </div>
        </div>
    </>
}