import {Form, Link, useNavigation, useSearchParams} from "react-router-dom";
import React, {useState} from "react";
import "./LoginForm.css"
import { FaUser } from "react-icons/fa";import { RiLockPasswordFill } from "react-icons/ri";





function LogInForm(props) {
    // const [searchParams] = useSearchParams()
    // const isLogin = searchParams.get("mode") === "login"

    const [goToCreateNewUser, setGoToCreateNewUser] = useState(false)
    props.onSubmit(goToCreateNewUser)
    const toggleCreateNewUser = () => {
        setGoToCreateNewUser(createNewUser=>!createNewUser)
    }
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"
    return (
        <>
            <Form method={"post"} className="form-container">
                <h1 className={"h1"}>LogIn</h1>

                <div>
                    <label htmlFor="username"><FaUser /> Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        // value={email}
                        // onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password"><RiLockPasswordFill /> Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        // value={password}
                        // onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className={"buttons"}>
                <button  disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "save"}
                </button>
                    <Link to={`?mode=singUp`} className={"link-button"} onClick={toggleCreateNewUser}>
                        Create new User
                    </Link>
                </div>
            </Form>
        </>
    )
}

export default LogInForm