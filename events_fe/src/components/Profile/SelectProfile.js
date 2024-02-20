import React, {useContext, useEffect, useState} from 'react';
import './SelectProfile.css';
import UserProfile from "./UserProfile";
import {Link} from "react-router-dom";
import Navbar from "./sideBar/Navbar";
import {getAuthToken} from "../../util/util";
import axios from "axios";
import DataAdminContext from "../../store/DataAdminContext";


const SelectProfile = () => {
    const { username } = useContext(DataAdminContext);

    const [optionsVisible, setOptionsVisible] = useState(false);
    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };



    return (
        // <Link to={"profile"}>
        <div >
            <div  onClick={toggleOptions} className="display">
                        <UserProfile />{username}
            </div>
            <div className={`select-options ${optionsVisible ? 'visible' : ''}`}>
                <Navbar toggleOptions={toggleOptions}/>
            </div>
        </div>
        // </Link>
    );
};

export default SelectProfile;