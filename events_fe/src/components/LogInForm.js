import {Form, Link, useNavigation} from "react-router-dom";
import React, {useState} from "react";
import "./LoginForm.css"

function LogInForm(props) {
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
                    <label htmlFor="username">Username:</label>
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
                    <label htmlFor="password">Password:</label>
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
                <button className={"btnSave"} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "save"}
                </button>
                <button onClick={toggleCreateNewUser}>
                    Create new User
                </button>
                </div>
            </Form>
        </>
    )
}

export default LogInForm