import React, {useState} from 'react';
import "./Auth.css"
import {Form, Link, useActionData, useNavigation, useSearchParams} from "react-router-dom";

const AuthForm = () => {
    // const [user,setUser]=useState(false)
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };
    //
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission (e.g., send data to server or perform validation)
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    //     // You can add further logic here, like sending the data to a server
    // };

    // const toggleUser = (e) => {
    //     setUser((isCurrentlyLogIn)=>!isCurrentlyLogIn);
    // };

    const [searchParams] = useSearchParams()
    const isLogin = searchParams.get("mode") === "login"
    const navigation=useNavigation()
    const isSubmitting=navigation.state==="submitting"


    return (
        <>
            <Form method={"post"} className="form-container">
                <h1>{isLogin ? "LogIn" : "SingUp"}</h1>

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
                <Link to={`?mode=${isLogin ? "singUp" : "login"}`}>
                    {isLogin ? "SingUp" : "LogIn"}
                </Link>
                <button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "save"}
                </button>
            </Form>
        </>
    );
};

export default AuthForm;
