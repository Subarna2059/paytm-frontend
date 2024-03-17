import { SigninSignup } from "../components/signup"
import { Subheading } from "../components/Subheading"
export const Signup = () =>{
    return <>
    <div className="bg-state-300 flex justify-center">
    <SigninSignup data={"Sign In"}></SigninSignup>
    <Subheading data={"Enter Your information to create your account"}></Subheading>
    </div>
    </>
}