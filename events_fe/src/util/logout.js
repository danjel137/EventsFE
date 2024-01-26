import {redirect} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export function actionLogOut(){
    localStorage.removeItem("token")
    return redirect("http://localhost:3000/auth")
}