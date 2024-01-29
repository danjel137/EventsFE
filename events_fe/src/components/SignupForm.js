import React, { useState } from 'react';
import "./SignupForm.css"

// SignupForm.js


const SignupForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleBirthdayChange = (e) => setBirthday(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();


        // Reset the form fields
        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setGender('');
        setBirthday('');
    };

    const [goToLogInForm, setGoToLogInForm] = useState(false)
    const toggleBackToLogIn = () => {
        setGoToLogInForm(backToLogIn=>!backToLogIn)
    }
    props.onClick(goToLogInForm)

    return (

        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-form-container">

            <h1 className={"h1"} >Sign Up</h1>
            <p>It’s quick and easy.</p>
            <div className={"nameAndSurname"}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                />
            </div>
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className={"passwordAndConfirmPassword"}>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
            </div>
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    required
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <label htmlFor="birthday">Birthday:</label>
                <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={birthday}
                    onChange={handleBirthdayChange}
                    required
                />
            </div>

            </div>
            <div className={"buttons"}>
            <button className={"btnSave"} ype="submit">
                Save
            </button>

            <button onClick={toggleBackToLogIn}>
               Back to LogIn
            </button>
            </div>
        </form>


    );
};

export default SignupForm;
