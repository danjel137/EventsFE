import AuthForm from "../components/AuthForm";
import error from "./Error";
import axios from "axios";
import {redirect} from "react-router-dom";

function AuthenticationPage() {
    return (
        <AuthForm/>
    )
}


export default AuthenticationPage

export async function authAction({request}) {
    const data = await request.formData()
    const searchParams = new URL(request.url).searchParams
    const mode = searchParams.get("mode") || "singUp"
    if (mode !== "login" && mode !== "singUp") {
        throw error()
    }
    const authData = {
        username: data.get("username"),
        password: data.get("password"),
    }


    try {
        const response = await axios.post('http://127.0.0.1:8000/'+ mode+"/", authData);
        const resData = response.data;
        const token=resData.token
        localStorage.setItem("token",token)
        console.log(token)

        if (mode === "login") {
            window.location.href = 'http://localhost:3000/events';
        } else if(mode === "singUp"){

             window.location.href = 'http://localhost:3000/events';
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