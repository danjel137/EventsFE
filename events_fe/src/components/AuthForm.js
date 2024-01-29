// import React, {useState} from 'react';
// import "./AuthForm.css"
// import {Form, Link, useActionData, useNavigation, useSearchParams} from "react-router-dom";
//
// const AuthForm = () => {
//
//     const [searchParams] = useSearchParams()
//     const isLogin = searchParams.get("mode") === "login"
//     const navigation=useNavigation()
//     const isSubmitting=navigation.state==="submitting"
//
//
//     return (
//         <>
//             <Form method={"post"} className="form-container">
//                 <h1>{isLogin ? "LogIn" : "SingUp"}</h1>
//
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         // value={email}
//                         // onChange={handleEmailChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         // value={password}
//                         // onChange={handlePasswordChange}
//                         required
//                     />
//                 </div>
//                 <Link to={`?mode=${isLogin ? "singUp" : "login"}`}>
//                     {isLogin ? "SingUp" : "LogIn"}
//                 </Link>
//                 <button disabled={isSubmitting}>
//                     {isSubmitting ? "Submitting..." : "save"}
//                 </button>
//             </Form>
//         </>
//     );
// };
//
// export default AuthForm;
