import { SigninSignup } from "../components/Signup"
import { Subheading } from "../components/Subheading"
import { InputBox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
export const Signin = () => {
    return<>
         <div className="flex justify-center bg-neutral-600 h-[100vh] relative ">
        <div className="bg-state-300 flex flex-col h-[50vh] mt-14 w-[20vw] rounded-md bg-white text-center absolute pt-8 mt-44">
            <SigninSignup data={"Sign In"}></SigninSignup>
            <Subheading data={"Enter Your credentials to access your account"}></Subheading>
            <InputBox data={"Email"} placeholder={"example@gmail.com"}/>
            <InputBox data={"Password"}/>
            <Button data={"Sign In"}></Button>
            <BottomWarning data={"Dont' have an account?"} buttontext={"SignUp"} to={"/signUp"}></BottomWarning>
        </div>
        </div>
    </>
}