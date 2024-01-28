import React, { useState } from 'react';
import './SelectProfile.css';
import UserProfile from "./UserProfile";
import {Link} from "react-router-dom";
import Navbar from "./sideBar/Navbar";


const SelectProfile = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        // <Link to={"profile"}>
        <div >
            <div  onClick={toggleOptions} className="display">
                        <UserProfile />Profile
            </div>
            <div className={`select-options ${optionsVisible ? 'visible' : ''}`}>
                <Navbar toggleOptions={toggleOptions}/>
            </div>
        </div>
        // </Link>
    );
};

export default SelectProfile;