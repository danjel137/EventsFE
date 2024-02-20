
import error from "./Error";
import axios from "axios";
import {redirect} from "react-router-dom";
import LogInForm from "../components/LogInForm";
import SignupForm from "../components/SignupForm";
import {useState} from "react";
import "./Authentication.css"
import {getAuthToken} from "./util";

function AuthenticationPage() {

    const [signUp, setSignUp] = useState(false)
    const [logIn, setLogin] = useState(true)

    function getDataToToggleInSignupForm(data) {
        if(data){
            setSignUp(!signUp)
            setLogin(!logIn)
        }
    }

    function getDataToToggleInLoginForm(data) {
        if(data){
            setSignUp(!signUp)
            setLogin(!logIn)
        }

    }
    return (
        <div className={"authentication"}>
            {logIn && !signUp && <LogInForm onSubmit={getDataToToggleInSignupForm}/>}
            {!logIn && signUp && <SignupForm onClick={getDataToToggleInLoginForm}/>}

        </div>
    )
}


export default AuthenticationPage

export async function authAction({request}) {

    const data = await request.formData()
    const searchParams = new URL(request.url).searchParams
    const mode = searchParams.get("mode") || "login"
    console.log("here is mode",mode)
    // if (mode !== "login" && mode !== "singUp") {
    //     throw error()
    // }
    // const authData = {
    //     username: data.get("username"),
    //     password: data.get("password"),
    // }
    let authData={};
    if(mode==="login"){
         authData = {
            username: data.get("username"),
            password: data.get("password"),
        }
    }else if(mode==="singUp"){
        authData = {
            first_name: data.get("firstName"),
            last_name: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            password_confirmation: data.get("confirmPassword"),
            account:{
                gender: data.get("gender"),
                birthday: data.get("birthday"),
            }
        }
    }else{
        throw error()
    }
    console.log(authData)

    try {
        const response = await axios.post('http://127.0.0.1:8000/'+ mode+"/", authData);
        const resData = response.data;
        const token=resData.token
        localStorage.setItem("token",token)
        console.log(token)

        if (mode === "login") {
            window.location.href = 'http://localhost:3000/photos';
        } else if(mode === "singUp"){

             window.location.href = 'http://localhost:3000/photos';
        }
        // return response.data;
    } catch (error) {
        if (mode === "login") {
            throw new Response(JSON.stringify({message: "We couldn't  login"}), {
                status: 500,
            });
        } else {
            throw new Response(JSON.stringify({message: "We couldn't  singUp"}), {
                status: 500,
            });
        }
    }


}